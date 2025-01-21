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
  image = JSON.parse(localStorage.getItem('loggedin')!).image; 
  name = JSON.parse(localStorage.getItem('loggedin')!).firstName + " " + JSON.parse(localStorage.getItem('loggedin')!).lastName;
  email = JSON.parse(localStorage.getItem('loggedin')!).email;
  gender=JSON.parse(localStorage.getItem('loggedin')!).gender;
  constructor(private router: Router,private auth:AuthapiService) {}
  ngOnInit(): void {
  }
  
  logout(): void {
    localStorage.removeItem('loggedin');
    this.router.navigate(['login']);
  }
}
