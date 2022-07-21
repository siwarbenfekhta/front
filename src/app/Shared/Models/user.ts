export class User { 
    public firstname : string ; 
    public lastname : string ; 
    public email : string ; 
    public password: string;  


    constructor(fn:string,ln:string,email:string,pw:string) 
    {this.firstname=fn ; 
        this.lastname=ln; 
        this.email=email; 
        this.password=pw ; 
    }

}
