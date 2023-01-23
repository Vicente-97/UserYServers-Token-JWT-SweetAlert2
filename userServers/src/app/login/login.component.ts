import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth.service.service';
import { Routes, Router } from '@angular/router';
import { Observable } from 'rxjs';
import swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email=""
  password=""
  isLoggedIn!: boolean;

  constructor(private authService: AuthServiceService,  private  route :Router ) { }

  ngOnInit(): void {
    this.authService.isAuthenticated()
    .subscribe({
      next: (resp) => {
        if (resp) {
          this.isLoggedIn=true;
        }else{
          this.isLoggedIn=false;
        }
      }
    })
  }

  login(){
    this.authService.login(this.email, this.password)
    .subscribe({
      next: (resp) => {
        if (resp) {
          this.isLoggedIn=true;
          this.route.navigate(['/servers']);
        }
        else {
          if(resp)
          this.email=''; 
          this.password='';
          swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        }
      }
    })
    
    }

  

  onlogout() {    
    this.authService.logout();

    this.isLoggedIn=false;
  }

}
