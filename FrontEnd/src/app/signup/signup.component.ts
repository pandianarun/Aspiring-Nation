import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  postUserForm!: FormGroup
  successMessage: string = '';
  constructor(private UserService : UserServiceService,
     private fb:FormBuilder, private router:Router){}
  
  ngOnInit()
  {
    this.postUserForm=this.fb.group({
      name:[null,Validators.required],
      email:[null,Validators.required,Validators.email],
      phone:[null,Validators.required]
    })
  }
  addUser(){
    //console.log(this.postCustomerForm.value)
    this.UserService.postUser(this.postUserForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/allUser");
    })
  }
  OnSubmit(): void {
    this.postUserForm.reset();
    this.successMessage = 'Form submitted successfully!';
  }

}
