import { Component, OnInit } from '@angular/core';
import { SellerServiceService } from '../service/seller-service.service';
import { Router } from '@angular/router';
import { Signup } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
 islogin = true;
 loginError : string = ''
  constructor(private sellerService : SellerServiceService,private router : Router) { }

  ngOnInit(): void {
    this.sellerService.reloadseller()
  }

  sellerSignIn(data:Signup):void{
    this.sellerService.signUpSeller(data)
  }

  sellerLogIn(data:Signup):void{
    this.sellerService.loginSeller(data);
    this.sellerService.isLogginError.subscribe((result)=>{
      if(result){
        this.loginError = 'Invalid User Or Password!! Try Again'
      }
    })
  }

  openLogin(){
    this.islogin=true;
  }
  openSignup(){
    this.islogin=false;
  }

}
