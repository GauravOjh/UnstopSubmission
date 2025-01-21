import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UsernameDirective } from '../../Directive/username.directive';
import { AuthapiService } from '../../Services/authapi.service';
import { Authresponseuserdata } from '../../model/authresponsedata';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,UsernameDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  host:{ngSkipHydration: 'true'},
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  readonly userData = signal<Authresponseuserdata | null>(null);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private auth : AuthapiService
  ) {}

  ngOnInit(): void {
    // Redirect if already logged in
    // if (localStorage.getItem('userData')) {
    //   this.router.navigate(['/home']);
    // }

    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^emilys$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm?.valid) {
      const loginData = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
        email: this.loginForm.value.email || undefined,
        expiresInMins: 30,
      };

      this.auth.login(loginData).subscribe({
        next:(response:any)=>{
          this.router.navigate(['/home']);
          localStorage.setItem('loggedin',JSON.stringify(response));
        } ,
        error:(error)=>{
          console.error('Login failed', error)
        }
    });
    }
  }
}
