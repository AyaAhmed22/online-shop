import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Product } from 'src/app/store/product.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = 'http://54.38.33.183:8081/hardware/api/';
  private products:Array<any>
  constructor(private http: HttpClient) { }

  getProducts() {
    let url: string = this.baseUrl + 'products';
    return this.http.get(url).subscribe(data => {
      console.log(data);
    });
  }

  getProduct(id:number){
    this.products.filter(p=>p.id == id);
  }

}
