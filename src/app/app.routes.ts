import { Routes } from '@angular/router';
import { HomeComponent } from './auth/home/home.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home' ,pathMatch:'full'},
    {path:'login', component:LoginComponent},
    { path: 'home', component: HomeComponent }
];
