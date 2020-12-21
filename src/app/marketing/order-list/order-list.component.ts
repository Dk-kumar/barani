import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewOrderDetails } from 'src/app/models/new-order-details';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  
  newOrderDetails : NewOrderDetails[]
  constructor(private router:Router, private orderService:OrderServiceService) { }

  ngOnInit(): void {
    this.orderService.Get_Customer_Detail()
    .subscribe(data => {
      this.newOrderDetails = data
    })

  }

  addCustomer(){
    this.router.navigateByUrl('/Marketing/New-order')
  }

}
