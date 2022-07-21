import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ServiceuserService } from '../../../Shared/Services/serviceuser.service';
import { User } from '../../../Shared/Models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm : FormGroup
  constructor(private fb:FormBuilder , private userservice : ServiceuserService , private router : Router) {
    let formconrols = {  
  
       email :new FormControl(), 
       password:new FormControl() 

    } ;
    this.myForm= this.fb.group(formconrols)

   }

  ngOnInit(): void {
  }
  loginUser()
  { 
    
    let data = this.myForm.value ; 
    let user = new User('abc','abc',data.email,data.password) ;  
     
    this.userservice.loginuser(user).subscribe(
     res=>{ console.log(res) ;
      this.userservice.setUser(res.Firstname,res.Lastname,res.Email,res.Password)

      this.router.navigate(['/AdminDashboard']) ; 
    }, 
    err=>{
      console.log(err) ; 
    }
    ) 
    
  }
}
