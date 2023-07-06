import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductsService } from '../service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage :String=''
  constructor(private api : ProductsService, private router : Router) { }

  ngOnInit(): void {
  }

  addProduct(data : product){
    this.api.addProduct(data).subscribe((res)=>{
      if(res){
        this.addProductMessage = 'Product Succesfully Added!'
      }setTimeout(()=>this.addProductMessage='',1000)
      this.router.navigate(['seller-home'])
    })
  }

}
