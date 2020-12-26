import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NewOrderDetails } from 'src/app/models/new-order-details';
import { OrderServiceService } from 'src/app/service/order-service.service';


@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
 
  orderDetailsForm:FormGroup
  form:FormGroup
  data : NewOrderDetails[]

  constructor(private formbuilder:FormBuilder, private orderService:OrderServiceService) { }
  

  ngOnInit(): void {
    this.orderDetailsForm = this.formbuilder.group({
      Customer_id : [],
    Email_id : [],
    Customer_name : [],
    Nick_name : [],
    Address : [],
    GST_no : [],
    CIN_no : ['123esd4',],
    Contact_1 : [],
    Contact_2: [],
    Contact_3 : [],
    Contact_4 : ['1234567890',],
    /*product_id : [],
    Product_name : [],
    Casting : [],
    vendor_name : [],
    pattern_Scope : ['',],
    painting : [],
    packing : [],
    Transport : [],
    payment : [],
    export : [],
    Quantity : []*/
    })
    
    this.orderService.Get_Customer_Detail()
    .subscribe(item => {
      this.data = item
    })

  }

  submit(){
    const value = this.orderDetailsForm.value;
    this.orderService.Post_Customer_Detail(value)
    .subscribe(data => {
      console.log(data)
    },
    error => {
      console.log(error)
    })
    console.log(this.data)
    console.log(value)

}

}
