import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { product } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  prodQuantity :number= 1
  prodDetails : undefined | product;
  constructor(private activeRoute: ActivatedRoute,private api : ProductsService) {}

  ngOnInit(): void {
    let productID = this.activeRoute.snapshot.paramMap.get('id');
    console.warn(productID)
    productID && this.api.getProd(productID).subscribe((res)=>{
      console.warn(res)
      this.prodDetails = res;
    })
  }

  handleQuantity(val:string){
    if(this.prodQuantity<20 && val=='plus'){
      this.prodQuantity = this.prodQuantity+1
    }
    else if(this.prodQuantity>1 && val=='minus'){
      this.prodQuantity = this.prodQuantity-1
    }
  }

  AddToCart(){
    if(this.prodDetails){
      this.prodDetails.quantity = this.prodQuantity
      if(!localStorage.getItem('user')){
        this.api.productAddToCart(this.prodDetails)
      }
    }
  }

  removeFromCart(){
    
  }
}
