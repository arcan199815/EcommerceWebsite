import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Login, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLogInError= new EventEmitter<boolean>(false);
  constructor(private http:HttpClient, private router: Router) { }
  userSignUp(data:SignUp){
    return this.http.post("http://localhost:3000/seller",
      data,
      {observe:'response'}
    ).subscribe((result)=>{
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body))
      this.router.navigate(['seller-home']);
      console.warn("service call",result);
    });
    //return this.http.post("http://localhost:3000/seller",data);
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
  userLogin(data:Login){
    console.warn(data);
    return this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
      {observe:'response'}
    ).subscribe((result:any)=>{
      console.warn("service call",result);
      if(result && result.body && result.body.length){
        console.warn("user logged in");localStorage.setItem('seller', JSON.stringify(result.body))
        this.router.navigate(['seller-home']);
      }else{
        console.warn("login failed");
        this.isLogInError.emit(true);
      }
    });
  }
}
