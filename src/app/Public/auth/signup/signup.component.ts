import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ServiceuserService } from '../../../Shared/Services/serviceuser.service';
import { User } from '../../../Shared/Models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm : FormGroup

  constructor(private fb:FormBuilder , private userservice : ServiceuserService , private router : Router) {
    let formconrols = {  
      firstName:new FormControl() ,
      lastName:new FormControl(), 
       email :new FormControl(), 
      password:new FormControl() 

    } 
    this.myForm= this.fb.group(formconrols)
   } ; 

  ngOnInit(): void {
  }
  saveUser()
{ 
  
  let data = this.myForm.value ; 
  let user = new User(data.firstName,data.lastName,data.email,data.password) ;  
  console.log(user) ;  
  this.userservice.adduser(user).subscribe(
   res=>{ console.log(res) ;
    this.router.navigate(['/Signin']) ; 
  }, 
  err=>{
    console.log(err) ; 
  }
  )
}

}
