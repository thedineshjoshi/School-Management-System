import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { _login } from '../Model/_login';
import { ApiCallService } from '../service/api-call.service';
import { CookieOptions, Router } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    HttpClientModule,


  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LoginRequest:_login= new _login();
  constructor(private apiService:ApiCallService,private router:Router)
  {}

  Login()
  {
    this.apiService.Login(this.LoginRequest).subscribe(
      res=>{
        
        alert("Login Success");
        // this.router.nav
      },
      err=>{
        alert("Login Failed")
      }
    )
  }
}
