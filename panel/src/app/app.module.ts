import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddDealComponent } from './add-deal/add-deal.component';
import { ViewDealComponent } from './view-deal/view-deal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddDealComponent,
    ViewDealComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
