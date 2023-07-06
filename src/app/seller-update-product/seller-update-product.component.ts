import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productData : undefined | product;
  updateMessage : undefined | string;
  datas : object | undefined;
  
  constructor(private route : ActivatedRoute,private api: ProductsService,private router : Router) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    console.warn(productId)
    productId && this.api.getProd(productId).subscribe((res)=>{
      this.productData = res;
    })
  }

  test(data : product){

    let productIds = this.route.snapshot.paramMap.get('id')
     this.api.updateProductservice(data, productIds).subscribe(res =>{
      console.log(res)
      this.router.navigate(['seller-home'])
     })
  } 
  



}
