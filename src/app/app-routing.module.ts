import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerGuardGuard } from './guard/seller-guard.guard';
import { HomeComponent } from './home/home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'seller-auth',
    pathMatch: 'full',
  },
  {
    path: 'seller-auth',
    component: SellerAuthComponent,
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate: [SellerGuardGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path:'seller-add-product',
    component:SellerAddProductComponent,
    canActivate: [SellerGuardGuard],
  },
  {
    path:'seller-update-product/:id',
    component:SellerUpdateProductComponent,
    canActivate: [SellerGuardGuard],
  },
  {
    path:'product-details/:id',
    component:ProductDetailsComponent,
  },{
    path:'user-auth',
    component:UserAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
