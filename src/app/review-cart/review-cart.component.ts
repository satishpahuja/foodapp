import { Component, OnInit } from '@angular/core';
import { CartDetails } from '../models/cart-details';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-cart',
  templateUrl: './review-cart.component.html',
  styleUrls: ['./review-cart.component.css']
})
export class ReviewCartComponent implements OnInit {

  cartDetails: CartDetails = new CartDetails();

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    let storedCartDetails = JSON.parse(localStorage.getItem('cartDetails'));
    if (storedCartDetails != null)
      this.cartDetails = storedCartDetails;
  }

  submitOrder() {
    let obs = this.http.post("http://localhost:8081/foodorderingrestapp/submitorderandsendmail/",this.cartDetails);
    obs.subscribe((response) => {
      this.router.navigate(['submitorder']);
      localStorage.removeItem("cartDetails");
    });
  }
}
