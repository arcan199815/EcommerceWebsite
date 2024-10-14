import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { NgModule } from '@angular/core';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
    },
    {
        path:'seller-auth',
        component:SellerAuthComponent,
    },
    {
        path:'seller-home',
        component:SellerHomeComponent,
        canActivate: [authGuard]
    },
    {
        path:'seller-add-product',
        component:SellerAddProductComponent,
        canActivate: [authGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
