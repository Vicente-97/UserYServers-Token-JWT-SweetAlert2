import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/servers/interfaces/client.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http: HttpClient) { }

   jwt = localStorage.getItem("jwt");


  


  getUsers():Observable<User[]>{
    
 const  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${this.jwt}` })
  };

    return this.http.get<User[]>('http://localhost:8000/users', httpOptions)
  }

  getUser(id:number):Observable<User>{
    
  const httpOptions = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${this.jwt}` })
  };

    return this.http.get<User>(`http://localhost:8000/users/${id} `, httpOptions)
  }


  getUserEmail(email:string):Observable<User[]>{
    
  const httpOptions = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${this.jwt}` })
  };
    return this.http.get<User[]>(`http://localhost:8000/users/?q=${email}`, httpOptions)
  }



  

}
