import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { FooterComponent } from "./footer/footer.component";
import { SliderComponent } from "./slider/slider.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { HomeComponent } from "./home/home.component";
import { MessagesFormComponent } from "./messages-form/messages-form.component";
import { ContactHeaderComponent } from "./contact-header/contact-header.component";
import { ProductsComponent } from "./products/products.component";
import { MiddleProductsComponent } from "./middle-products/middle-products.component";
import { BestSellersComponent } from "./best-sellers/best-sellers.component";
import { IconBoxComponent } from "./icon-box/icon-box.component";
import { ProductSheetComponent } from "./product-sheet/product-sheet.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { RelatedProductsComponent } from "./related-products/related-products.component";
import { CartComponent } from "./cart/cart.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { ProductThumbnailComponent } from "./product-thumbnail/product-thumbnail.component";
import { CategoriesComponent } from './categories/categories.component';
import { StoreModule } from '@ngrx/store'
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { reducer } from './store/reducer'
import { ProductsService } from './services/products/products.service'

const appRoutes: Routes = [
  { path: "contact-page", component: ContactPageComponent },
  { path: "home", component: HomeComponent },
  { path: "home/product-sheet", component: ProductSheetComponent },
  { path: "cart", component: CartComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FooterComponent,
    SliderComponent,
    ContactPageComponent,
    HomeComponent,
    MessagesFormComponent,
    ContactHeaderComponent,
    ProductsComponent,
    MiddleProductsComponent,
    BestSellersComponent,
    IconBoxComponent,
    ProductSheetComponent,
    ProductDetailComponent,
    RelatedProductsComponent,
    CartComponent,
    ProductsComponent,
    SignupComponent,
    LoginComponent,
    ProductThumbnailComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    StoreModule.forRoot({ products: reducer })
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
