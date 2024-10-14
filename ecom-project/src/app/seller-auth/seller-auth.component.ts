import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import {Router} from '@angular/router';
import { Login, SignUp } from '../data-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {
  constructor(private seller: SellerService, private router: Router){}
  showLogin=false;
  authError: string='';
  ngOnInit():void{
    this.seller.reloadSeller();
  } 

  signUp(data: SignUp):void{
    this.seller.userSignUp(data)
    // .subscribe((result)=>{
    //   if(result){
    //     this.router.navigate(['seller-home']);
    //   }
    // });
  }

  openLogin(){
    this.showLogin=true;
  }

  openSignUp(){
    this.showLogin=false;
  }

  login(data: Login):void{
    this.authError="";
    //console.warn(data);
    //api call will be here;
    this.seller.userLogin(data);
    this.seller.isLogInError.subscribe((error)=>{
      if(error){
        this.authError="Email or password is not correct";
      }
    })
  }
}
