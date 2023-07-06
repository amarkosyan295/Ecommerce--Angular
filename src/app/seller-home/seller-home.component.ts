import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  ProductList : undefined | product[];
  DelMessage : undefined | string;
  constructor(private api : ProductsService) { 
  }

  ngOnInit(): void {
    this.GetProducts()
  }

  deleteProduct(id :  number){
    this.api.DelProduct(id).subscribe((res)=>{
      if(res){
        this.DelMessage = 'Product Deleted!'
        this.GetProducts()
      }setTimeout(()=>this.DelMessage=undefined,1000)
    })
  }


  GetProducts(){
    this.api.GetProducts().subscribe((result)=>{
      console.warn(result);
      this.ProductList = result;
    })
  }

}
