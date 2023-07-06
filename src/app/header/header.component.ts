import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { product } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: String = 'default';
  sellerName: string = '';
  userName: string = '';
  searchResult: undefined | product[];
  cartItems = 0
  constructor(private router: Router, private apiProduct: ProductsService) {}

  ngOnInit(): void {
    this.router.events.subscribe((res: any) => {
      if (res.url) {
        if (localStorage.getItem('seller') && res.url.includes('seller')) {
          let sellerStore = localStorage.getItem('seller');
          let sellerNameStore = sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName = sellerNameStore.name;
          this.menuType = 'seller';
        } else if (localStorage.getItem('user')) {
          let userStore = localStorage.getItem('user');
          let userNameStore = userStore && JSON.parse(userStore);
          this.userName = userNameStore.name;
          this.menuType = 'user';
        } else {
          console.warn('outside seller');
          this.menuType = 'default';
        }
      }
    });

    let addCardData = localStorage.getItem('localCart')
    if(addCardData){
      this.cartItems = JSON.parse(addCardData).length
    }

    this.apiProduct.addCartData.subscribe((res)=>{
      this.cartItems = res.length
    })

  }

  logout() {
    localStorage.removeItem('seller');
    this.router.navigate(['seller-auth']);
  }

  search(query: KeyboardEvent) {
    if (query) {
      const elm = query.target as HTMLInputElement;
      this.apiProduct.searchProduct(elm.value).subscribe((res) => {
        console.warn(res);
        this.searchResult = res;
      });
    }
  }

  logoff() {
    localStorage.removeItem('user');
    this.router.navigate(['user-auth']);
  }
}
