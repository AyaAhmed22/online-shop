import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { PRODUCTS } from '../store/products';
import * as Products from "./../store/actions";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS
  prods: Observable<Array<any>>
  constructor(private store:Store<any>) { }

  ngOnInit() {
  }

  
}
