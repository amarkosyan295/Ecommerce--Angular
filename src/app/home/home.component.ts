import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
popularproduct : undefined|product[];
  constructor(private api : ProductsService) { }

  ngOnInit(): void {
    this.api.popularProducts().subscribe((res)=>{
      this.popularproduct = res;
      console.log(res)
    })
  }

}
