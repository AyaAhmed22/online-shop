import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { PRODUCTS } from '../store/products';
import { Http, Response } from '@angular/http'
import * as Products from "./../store/actions";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //this is meant to test the CORS problem 
  private url = "http://54.38.33.183:8081/hardware/api/products";
  products = PRODUCTS;
  productsData;
  prods: Observable<Array<any>>;

  constructor(private store: Store<any>, private http: Http) {
    this.getData();
    console.log(this.productsData);
  }

  //this is temporary it should take it's place inside a service once the CORS issue is solved. 
  getData() {
    console.log("working well");
    return this.http.get(this.url).subscribe(data => {
      this.productsData = data;
      console.log(data);
    });
  }

  ngOnInit() {
  }


}
