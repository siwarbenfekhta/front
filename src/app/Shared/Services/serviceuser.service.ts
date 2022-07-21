import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user';
@Injectable({
  providedIn: 'root'
})
export class ServiceuserService {

  private myuser:User = new User('','','','');
  setUser(a:string,b:string,c:string,d:string){
    this.myuser.firstname=a;
    this.myuser.lastname=b;
    this.myuser.email=c;
    this.myuser.password=d;
  }

  getUser(){
    return this.myuser;
  }


  constructor(private http:HttpClient ) { } 

  adduser(user: User) {

    return this.http.post<any>("http://localhost:3000/auth/signup",{"Firstname": user.firstname,"Lastname": user.lastname,"Email": user.email,"Password": user.password}) ; 
  }
  loginuser(user : User){
    return this.http.post<any>("http://localhost:3000/auth/signin",{"Email": user.email,"Password": user.password}) ; 
  }
}


