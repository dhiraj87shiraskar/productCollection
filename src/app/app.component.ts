import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/service/product-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public products = [];
  public productStoreTitle: string = "The Travel Collection";

  /*
  When any componant need to access the service data it 
  need to be subscribed which is defined in constructor as a 
  private member
  It will create private scope veriable and we can use all methods from its service
  */
  constructor(private productService: ProductApiService) { }

  /*
    When view is initalized we are getting service from subscribed service 
    in the form of promises we have to handle that data and error if any
    */
  ngOnInit() {

    // we are subscribing service 
    this.productService.getAllProducts()
      .subscribe(
        response => {

          this.products = response.groups;
          console.log(this.products);
        },

        // get required error data 
        error => { console.log(error) });
  }
  addToCart = (cartData: string) => {
    alert("Item " + cartData + " added to cart");
  }

  buyProduct = (product: string) => {
    alert("Thank you for buying: " + product);
  }
 
}
