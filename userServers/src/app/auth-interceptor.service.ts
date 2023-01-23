import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(  private router: Router) { 
    
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt: string|null = localStorage.getItem('jwt');

    let request = req;
    console.log("interceptor")
    if (jwt) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ jwt }`
        }
      });
    }

    return next.handle(request).pipe(
    catchError((err: HttpErrorResponse) => {

      if (err.status === 401) {
        this.router.navigateByUrl('/');
      }

      return throwError( err );

    })
  );
  }
}
