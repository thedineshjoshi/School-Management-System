import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Register } from "../Model/_register";
import { Injectable } from "@angular/core";
import { _login } from "../Model/_login";

@Injectable({
    providedIn:'root'
})

export class ApiCallService{
    constructor (private http:HttpClient) {}
    PostRegister(register:Register):Observable<any>
    {
        return this.http.post("https://localhost:7049/api/authentication/SignUp",register,{responseType:"json"});
    }

    Login(LoginRequest:_login):Observable<any>
    {
        return this.http.post("https://localhost:7049/api/authentication/Login",LoginRequest,{responseType:'json'})
    }
}