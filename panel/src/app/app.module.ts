import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddDealComponent } from './add-deal/add-deal.component';
import { ViewDealComponent } from './view-deal/view-deal.component';
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from "angularfire2/database";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddDealComponent,
    ViewDealComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
