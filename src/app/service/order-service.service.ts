import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class OrderServiceService {

  base_url = "https://baranibackend.pythonanywhere.com/marketing/"
  httpHeaders = new HttpHeaders({'Content-type':'application/json'})
  constructor(private http:HttpClient) { }
  
  
  Get_Customer_Detail():Observable<any>{
    return this.http.get(this.base_url + "Customer_Detail/",{headers:this.httpHeaders} )
  }

  Post_Customer_Detail(data):Observable<any>{
    return this.http.post(this.base_url+"Customer_Detail/",data ,{headers:this.httpHeaders})
  }
}
