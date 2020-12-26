import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './dashboard/index/index.component';
import { HomeComponent } from './dashboard/home/home.component';
import { MarketingComponent } from './marketing/marketing.component'
import { PlanningComponent } from './planning/planning.component';
import { ProductionComponent } from './production/production.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { StockComponent } from './stock/stock.component';
import { NewOrderComponent } from './marketing/new-order/new-order.component';
import { ExistingOrderComponent } from './marketing/existing-order/existing-order.component';
import { OrderListComponent } from './marketing/order-list/order-list.component';

const routes: Routes = [
  
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'Marketing',
    component:MarketingComponent,
    children: [
    
    ]
  },
  {
    path:'Marketing/New-order',
    component:NewOrderComponent
  },
  {
    path:'Marketing/Existing-order',
    component:ExistingOrderComponent
  },
  {
    path:'Marketing/order-list',
    component:OrderListComponent
  },
  {
    path:'Planning',
    component:PlanningComponent
  },
  {
    path:'Production',
    component:ProductionComponent
  },
  {
    path:'Purchase',
    component:PurchaseComponent
  },
  {
    path:'Stock',
    component:StockComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
