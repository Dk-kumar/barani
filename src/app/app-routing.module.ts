import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './dashboard/index/index.component';
import { HomeComponent } from './dashboard/home/home.component';
import { MarketingComponent } from './marketing/marketing.component'
import { PlanningComponent } from './planning/planning.component';
import { ProductionComponent } from './production/production.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
 
 
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'Marketing',
    component:MarketingComponent
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
