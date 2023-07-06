import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  addCartData = new EventEmitter<product[] | []>()
  constructor(private http : HttpClient) { }

  addProduct(data : product){
    return this.http.post('http://localhost:3000/products',data)
  }

  GetProducts(){
    return this.http.get<product[]>('http://localhost:3000/products')
  }

  DelProduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }

  getProd(id:string){
    return this.http.get<product>(`http://localhost:3000/products/${id}`)
  }

  updateProductservice(products : product , id:any){
    return this.http.put(`http://localhost:3000/products/${id}`,products)
  }

  popularProducts(){
    return this.http.get<product[]>(`http://localhost:3000/products?_limit=6`)
  }

  searchProduct(query:string){
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`)
  }

  productAddToCart(data : product){
    let cart = [];
    let localCart = localStorage.getItem('localCart')
    if(!localCart){
      localStorage.setItem('localCart', JSON.stringify([data]))
    }else{
      cart = JSON.parse(localCart);
      cart.push(data);
      localStorage.setItem('localCart', JSON.stringify(cart));
    }
    this.addCartData.emit(cart)
  }
}
