import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthapiService } from '../../Services/authapi.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  images: any;
  emails: any;
  name: any;
  gender: any;
  constructor(private router: Router,private auth:AuthapiService) {}
  ngOnInit(): void {
    if(this.auth.loginData!=undefined){
    this.images = this.auth.loginData.image;
    this.emails = this.auth.loginData.email;
    this.name = this.auth.loginData.firstName + " " + this.auth.loginData.lastName;
    this.gender = this.auth.loginData.gender; 
    }
  }
  
  logout(): void {
    localStorage.removeItem('loggedin');
    this.router.navigate(['login']);
  }
}
