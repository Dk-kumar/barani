import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {

  order:any[] =['order-list','Existing-order']
  constructor(private router:Router) { }
  

  ngOnInit(): void {
  }

  selectOrder(){
    this.router.navigateByUrl('/Marketing/order');
  }

}
