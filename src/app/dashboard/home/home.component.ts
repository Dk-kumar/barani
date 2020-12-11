import { Component, OnInit } from '@angular/core';
import {APIService} from 'src/app/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titleValue:string = ''
  
  title = [
    {'title':"Planning" , "imgUrl":"plan.jpg" },
    {'title':"Purchase" , "imgUrl":"purchase.jpg" },
    {'title':"Stock" , "imgUrl":"stock.jpg" },
    {'title':"Marketing" , "imgUrl":"marketing.jpg" },
    {'title':"Production" , "imgUrl":"production.jpg" },
    {'title':"Quality" , "imgUrl":"checking.jpg" },
    {'title':"Engineering", "imgUrl":"engineering.jpg"} ]

  
  

  constructor(public HttpService:APIService) { }

  ngOnInit(): void {
    console.log(this.titleValue)
    
  }
  action(val){
    this.HttpService.value = val;
  }

  

}
