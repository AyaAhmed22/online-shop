import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import * as Product from "./../store/actions";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  private IsSearching: boolean = false;
  product: Observable<Array<any>>
  constructor(private cd: ChangeDetectorRef, private store: Store<any>) {
    this.product = this.store.select('products');
  }

  private setIsSearching(): void {
    this.IsSearching = this.IsSearching == false ? true : false;
    this.cd.detectChanges();
  }

  getIsSearching(): boolean {
    return this.IsSearching;
  }

  private hideSearchPane(): boolean {
    if (this.IsSearching) {
      return true;
    }
  }

  private searchElement(product) {
    this.store.dispatch(new Product.RemoveProduct(product));
  }

  ngOnInit() {
  }

}
