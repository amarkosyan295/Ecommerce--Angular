import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login, Signup } from '../data-type';
import { BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {

  isSellerLoggedin = new BehaviorSubject<boolean>(false)
  isLogginError = new EventEmitter<boolean>(false)

  constructor( private http : HttpClient,private router : Router) { }

  signUpSeller(data : Signup){
    return this.http.post('http://localhost:3000/seller',data,{observe:'response'}).subscribe((res)=>{
        alert(`Welcome User`)
    })
  }

  reloadseller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedin.next(true)
      this.router.navigate(['seller-home'])
    }
  }

  loginSeller(data : Login){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'})
    .subscribe((res:any)=>{
      if(res && res.body && res.body.length){
        this.isSellerLoggedin.next(true);
        localStorage.setItem('seller',JSON.stringify(res.body))
        this.router.navigate(['seller-home'])
      }
      else{
       this.isLogginError.emit(true)
      }
    })
  }

  logoutUser(){
    localStorage.clear()
  }
}
