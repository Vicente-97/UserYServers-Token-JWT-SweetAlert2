import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth.service.service';
import { User } from './servers/interfaces/client.interface';
import { UsersService } from './users/services/users.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardianServiceService implements CanActivate{

  user! : User;
  constructor(private authService:AuthServiceService, private router:Router, private userService:UsersService) { }


  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   
  //   return this.authService.isAuthenticated()
  //   .then(
  //     (authenticated)=>{
  //       if (authenticated){
  //         return true;
  //       }else {
  //         this.router.navigate(['/']);
  //         return false;
  //       }
  //     }
  //   );

  // }

  canActivate():Observable<boolean>{
    // if(localStorage.getItem("authenticated")==="true"&& localStorage.getItem("jwt")!==null && localStorage.getItem("jwt")!==""){
    //   return true;
    // }else {
    //   this.router.navigate(['/']);
    //   return false;
      
    // }
    return this.authService.isAuthenticated()
    
  }

  


//   canActivateChild(route: ActivatedRouteSnapshot, 

//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

// return this.canActivate(route, state);

// }
 
}
