import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [
    {
      name: "iPhone XS",
      price:"670",
      status:"Sale",
      image:"assets/images/iphone_xs.png"
    },
    {
      name: "iPod Touch",
      price:"670",
      status:"",
      image:"assets/images/ipod_touch.jpg"
    },
    {
      name: "iPhone XS",
      price:"670",
      status:"Sale",
      image:"assets/images/iphone_xs.png"
    },
    {
      name: "Samsung Tab S4",
      price:"570",
      status:"",
      image:"assets/images/samsung_galaxy_tab_s4.jpg"
    },
    {
      name: "iPad Pro",
      price:"1100",
      status:"",
      image:"assets/images/ipad_pro.jpg"
    },
    {
      name: "ASUS ChromeBook Flip C101PA",
      price:"800",
      status:"Hot",
      image:"assets/images/asus_chromebook_flip.jpg"
    },
    {
      name: "Huawei Nova 3i",
      price:"300",
      status:"",
      image:"assets/images/huawei_nova_3i.jpg"
    },
    {
      name: "Samsung Gear Sport",
      price:"670",
      status:"Hot",
      image:"assets/images/gear_sport.jpg"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
