import {Injectable } from '@angular/core';
import { UsersService } from './users/services/users.service';
import { User } from './servers/interfaces/client.interface';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, switchMap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private UsersService: UsersService, private http: HttpClient) { }

  user! : User[];
  authenticated = false;
  jwt=String

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

 

  isAuthenticated():Observable<boolean> {
    const httpHeaders={
      headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem("jwt")}` })
    }
    return  this.http.get<any>('http://localhost:8000/jwt', httpHeaders)
    .pipe(switchMap(resp =>{

      return of(true);

  }), catchError(error =>{
      return of(false)
  })
  )

     
  }
 
  login(email:string, password: string): Observable<boolean>{ 
 return  this.http.post<any>(`http://localhost:8000/auth/login`,{'email':email, 'password':password}, this.httpOptions)
  .pipe(switchMap(resp =>{
        console.log(resp)
        localStorage.setItem("authenticated", "true")
        localStorage.setItem("jwt", resp.access_token)
        this.authenticated=true
        return of(true);
    }), catchError(error =>{
      localStorage.removeItem("jwt");
      localStorage.setItem("authenticated", "false");
      
      
      return of(false)
    })
    )
    


}
  
//  this.UsersService.getUserEmail(email)
  //  .subscribe({

  //   next: resp=> {
  //     this.user= resp
  //     if(this.user[0].email ==email&& this.user[0].name==password){
  //       localStorage.setItem("authenticated", "true")
  //       localStorage.setItem("rol",this.user[0].rol)
  //       this.authenticated=true
  //     }else{
  //       this.isAuthenticated
  //     }
  //   },
  //   error: (error)=> console.log(error)
  //  })
 
  logout() {
    localStorage.setItem("authenticated", "false")
    localStorage.removeItem('jwt');
    this.authenticated = false;
  }
}
