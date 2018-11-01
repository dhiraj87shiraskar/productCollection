import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private _url: string = "/assets/data/products.json";
  constructor(private http: HttpClient) { }

  /*
  This method will return all product 
  details from local json file 
  It will return promises and will handle which are 
  will subscribe this service with there componant
  */
  getAllProducts = () => {
    // return promises
    return this.http.get<any>(this._url);
  }
}
