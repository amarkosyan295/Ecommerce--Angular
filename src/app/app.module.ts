import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import {FormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    HomeComponent,
    SellerAddProductComponent,
    SellerUpdateProductComponent,
    ProductDetailsComponent,
    UserAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
