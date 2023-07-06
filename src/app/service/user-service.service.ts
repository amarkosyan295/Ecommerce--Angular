import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login, Signup } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  isValidUser = new EventEmitter<boolean>(false)

  constructor(private http : HttpClient,private router : Router) { }

  signupUser(user : Signup){
    return this.http.post('http://localhost:3000/user',user,{observe:'response'})
  }


  userAuthentication(){
    if(localStorage.getItem('user')){
      this.router.navigate(['home'])
    }
  }

  userLogin(data:Login){
    return this.http.get<Signup[]>(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((res:any)=>{
      if(res && res.body && res.body?.length){
        this.isValidUser.emit(false)
        localStorage.setItem('user',JSON.stringify(res.body[0]))
        this.router.navigate(['home'])
      }
      else{
       this.isValidUser.emit(true)
      }
    })
    
  }
}
