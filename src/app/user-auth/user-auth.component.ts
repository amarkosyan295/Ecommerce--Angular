import { Component, OnInit } from '@angular/core';
import { Login, Signup } from '../data-type';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  LogginSignupToggle = false;
  isUserValidAuth:string = ''

  constructor(private api : UserServiceService ,private router : Router) { }

  ngOnInit(): void {
    this.api.userAuthentication()
  }

  Signup(data:Signup){
    this.api.signupUser(data).subscribe((res)=>{
      if(res){
        localStorage.setItem('user',JSON.stringify(res.body))
      }
    })
  }

  Login(data:Signup){
      this.api.userLogin(data)
      this.api.isValidUser.subscribe((res)=>{
        if(res){
          this.isUserValidAuth = 'Please enter valid user details'
        }
      })
  }


  SignupToggle(){
    this.LogginSignupToggle =false;
  }

  LoginToggle(){
    this.LogginSignupToggle =true;
  }
}
