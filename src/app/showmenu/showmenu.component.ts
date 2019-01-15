import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartDetails } from '../models/cart-details';

@Component({
  selector: 'app-showmenu',
  templateUrl: './showmenu.component.html',
  styleUrls: ['./showmenu.component.css']
})
export class ShowmenuComponent implements OnInit {

  foodItems: any;

  isEligibleForOrder: boolean = false;
  cartDetails: CartDetails = new CartDetails();

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    let obs = this.http.get("http://localhost:8081/foodorderingrestapp/getfooddtls/");
    obs.subscribe((response) => {
      this.foodItems = response;
      console.log(response);
      let storedCartDetails = JSON.parse(localStorage.getItem('cartDetails'));
      if (storedCartDetails != null)
        this.cartDetails = storedCartDetails;
      this.setIsEligibleForOrder();
    });
  }

  addItemToCart(foodItem) {
    let indexOfItemInAddedItemsArray: number = this.cartDetails.addedItems.indexOf(foodItem);
    if (indexOfItemInAddedItemsArray == -1) {
      foodItem.quantity = 1;
      this.cartDetails.addedItems.push(foodItem);
    } else {
      let addedItemObj = this.cartDetails.addedItems[indexOfItemInAddedItemsArray];
      addedItemObj.quantity = addedItemObj.quantity + 1;
    }
    this.cartDetails.subTotal = this.cartDetails.subTotal + foodItem.price;
    this.refreshCart(foodItem);
  }
  deleteItemFromCart(foodItem) {
    var indexOfItemInAddedItemsArray = this.cartDetails.addedItems.indexOf(foodItem);
    if (indexOfItemInAddedItemsArray != -1) {
      let addedItemObj = this.cartDetails.addedItems[indexOfItemInAddedItemsArray];
      addedItemObj.quantity = addedItemObj.quantity - 1;
      if (addedItemObj.quantity == 0) {
        this.cartDetails.addedItems.splice(indexOfItemInAddedItemsArray, 1);
      }
      this.cartDetails.subTotal = this.cartDetails.subTotal - foodItem.price;
      this.refreshCart(foodItem);
    }
  }

  refreshCart(foodItem) {
    this.cartDetails.cgst = this.cartDetails.subTotal * this.cartDetails.cgstPercent / 100;
    this.cartDetails.sgst = this.cartDetails.subTotal * this.cartDetails.sgstPercent / 100;
    this.cartDetails.totalPrice = this.cartDetails.subTotal + this.cartDetails.cgst + this.cartDetails.sgst;
    this.setIntoLocalStorage();
    this.setIsEligibleForOrder();
  }

  setIntoLocalStorage() {
    localStorage.setItem('cartDetails', JSON.stringify(this.cartDetails));
  }

  setIsEligibleForOrder() {
    if (this.cartDetails.totalPrice > 249)
      this.isEligibleForOrder = true;
    else
      this.isEligibleForOrder = false;
  }

}
