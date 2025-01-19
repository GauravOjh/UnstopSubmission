import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Authresponseuserdata } from '../model/authresponsedata';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthapiService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'https://dummyjson.com/auth/login';

  login(data: { username: string; email?: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, { ...data, expiresInMins: 30 });
  }

  handleUser(res:Authresponseuserdata){
    const expiresData = new Date(
      new Date().getTime() + +res.expiresInMins * 1000
    );

    const user = new User(
      res.email,
      res.username,
      res.password,
      res.token,
      expiresData,
    );
    localStorage.setItem('userData',JSON.stringify(user));
  }

  autoLogin(){
    let userData :{email:string; token:string; expiresData:string; username:string; password:string;  } = JSON.parse(localStorage.getItem('userData') || '{}');

    if(!userData){
      return;
    }

    let user = new User(userData.email,userData.password,userData.token,userData.username,new Date(userData.expiresData))

    if(user.token){
      
    }
  }
}
