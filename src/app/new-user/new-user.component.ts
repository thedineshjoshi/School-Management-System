import { Component } from '@angular/core';
import { Register } from '../Model/_register';
import { ApiCallService } from '../service/api-call.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {
  register:Register = new Register();
  constructor(private apiservice:ApiCallService){}
  addData()
  {
    let registerdata = this.register.newUserRegistrationForm.value;
  this.apiservice.PostRegister(registerdata).subscribe(
    res=>{
      this.register.newUserRegistrationForm.reset();
      this.register = new Register();
      alert("New User Added Successfully");

    }
  )
}
newUserRegistrationForm = new FormGroup({
  FirstName:new FormControl(''),
  LastName:new FormControl(''),
  Adress:new FormControl(''),
  Email:new FormControl(''),
  PhoneNumber:new FormControl(''),
  UserName:new FormControl(''),
  Password:new FormControl('')


})
}
