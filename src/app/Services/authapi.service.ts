import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Authresponseuserdata } from '../model/authresponsedata';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthapiService {
  readonly userData = signal<Authresponseuserdata | null>(null);
  loginData:any;
  constructor(private http:HttpClient) { }

  private apiUrl = 'https://dummyjson.com/auth/login';

  login(data: { username: string; email?: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, { ...data, expiresInMins: 30 });
  }
  shareData(response:any){
    this.loginData = response;
  }
}
