import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarketingComponent } from './marketing/marketing.component'
import { PlanningComponent } from './planning/planning.component';
import { ProductionComponent } from './production/production.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { StockComponent } from './stock/stock.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'marketing',
    component:MarketingComponent
  },
  {
    path:'planning',
    component:PlanningComponent
  },
  {
    path:'production',
    component:ProductionComponent
  },
  {
    path:'purchase',
    component:PurchaseComponent
  },
  {
    path:'stock',
    component:StockComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
