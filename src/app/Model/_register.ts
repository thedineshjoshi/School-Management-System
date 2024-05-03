import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

export class Register {
    public ID: string = "";
    public FirstName: string = "";
    public LastName:string = "";
    public Address:string = "";
    public PhoneNumber:string = "";
    public Email:string = "";
    public UserName:string = "";
    public Password:string = "";
    public newUserRegistrationForm:FormGroup;

    constructor()
{
    let formBuilder = new FormBuilder();
    this.newUserRegistrationForm = formBuilder.group({
        FirstName:new FormControl(''),
        LastName:new FormControl(''),
        Address: new FormControl(''),
        PhoneNumber: new FormControl(''),
        UserName: new FormControl(''),
        Email: new FormControl(''),
        Password: new FormControl('')
    })
}
}
