import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';
import { warn } from 'console';

@Component({
  selector: 'app-seller-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage:string|undefined;
  constructor(private product:ProductService) {}

  ngOnInit(): void {
    
  }
  submit(data:Product){
    this.product.addProduct(data).subscribe((result)=>{
      console.warn(data);
      if(result){
        this.addProductMessage="Course is successfully added!!!";
      }
      setTimeout(()=>(this.addProductMessage = undefined),3000);
    });
    data.name="";
    data.price=0;
    data.category="";
    data.description="";
    data.image="";
  }
}
