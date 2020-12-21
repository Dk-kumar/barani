import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addCustomer(){
    this.router.navigateByUrl('/Marketing/New-order')
  }

}
