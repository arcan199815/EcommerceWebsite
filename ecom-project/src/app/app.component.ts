import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerService } from './services/seller.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SellerAuthComponent, FormsModule],
  // providers: [
  //   HttpClientModule
  // ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent2 {
  title = 'ecom-project';
  
}
