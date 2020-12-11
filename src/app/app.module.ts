import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PlanningComponent } from './planning/planning.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { StockComponent } from './stock/stock.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ProductionComponent } from './production/production.component';

import {APIService} from './api.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './dashboard/index/index.component';
import { HomeComponent } from './dashboard/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanningComponent,
    PurchaseComponent,
    StockComponent,
    MarketingComponent,
    ProductionComponent,
    IndexComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
