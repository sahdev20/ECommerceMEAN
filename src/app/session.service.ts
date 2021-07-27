import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  // public users:Array<any>=[]

  constructor(private httpClient:HttpClient) { }

  // saveUser(data:any){
  //   this.users.push(data)
  // } local-storage approach

  saveUser(data:any){
    let url = "http://restapi2020.herokuapp.com/api/users.json"
    return this.httpClient.post(url,data)
  }

  authenticate(email:string , password:string ):Observable<any>{
    let url = "http://restapi2020.herokuapp.com/api/login.json"
    let data = {"email":email,"password":password}

    return this.httpClient.post(url,data)
  }
}
