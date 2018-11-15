import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product = {
    name: "iPhone XS",
    price:"670",
    status:"Sale",
    image:"assets/images/iphone_xs.png"
  }

  constructor() { }

  ngOnInit() {
  }

}
