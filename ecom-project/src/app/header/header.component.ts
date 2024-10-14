import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  menuType: string ='default';
  sellerName: string ='';
  constructor(private route: Router){}

  ngOnInit(): void {
    
    this.route.events.subscribe((val: any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.warn('in seller area');
          this.menuType='seller';
          if(localStorage.getItem('seller')){
            let sellerStorage=localStorage.getItem('seller');
            let sellerData= sellerStorage && JSON.parse(sellerStorage)[0];
            this.sellerName=sellerData.name;
          }
        }else{
          console.warn('ouside seller');
          this.menuType='default';
        }
      }
      console.warn(val.url);
    })
  }

  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

}
