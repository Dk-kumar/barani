import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import {APIService} from 'src/app/api.service'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title:string;
  imgUrl;

  

  value = [
   {'title':"Planning" , "imgUrl":"plan.jpg" ,'status':'false'},
   {'title':"Purchase" , "imgUrl":"purchase.jpg",'status':'false' },
   {'title':"Stock" , "imgUrl":"stock.jpg",'status':'false' },
   {'title':"Marketing" , "imgUrl":"marketing.jpg",'status':'false' },
   {'title':"Production" , "imgUrl":"production.jpg",'status':'false' },
   {'title':"Quality" , "imgUrl":"checking.jpg",'status':'false' },
   {'title':"Engineering", "imgUrl":"engineering.jpg",'status':'false'} ]

  constructor(public HttpResponse:APIService) {
    this.title = this.HttpResponse.value 
    this.value = this.value.filter(res => {
      if(res.title === this.title){
        this.title = res.title
        this.imgUrl = res.imgUrl
      }
    })  
    
   }
  
  
    
  ngOnInit(): void {
    
  }
  
 
}
