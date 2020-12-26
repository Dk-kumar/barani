import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PlanningComponent } from './planning/planning.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { StockComponent } from './stock/stock.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ProductionComponent } from './production/production.component';
import {MatDialogModule} from '@angular/material/dialog';

import {APIService} from './api.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './dashboard/index/index.component';
import { HomeComponent } from './dashboard/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewOrderComponent } from './marketing/new-order/new-order.component';
import { ExistingOrderComponent } from './marketing/existing-order/existing-order.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderListComponent } from './marketing/order-list/order-list.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderServiceService } from './service/order-service.service';


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
    DashboardComponent,
    NewOrderComponent,
    ExistingOrderComponent,
    EngineeringComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [ 
    APIService,
    OrderServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
