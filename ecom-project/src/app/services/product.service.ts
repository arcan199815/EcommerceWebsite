import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(data:Product){
    console.log("service caleed");
    return this.http.post('http://localhost:3000/products',data);
  }
  productList(){
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
}
