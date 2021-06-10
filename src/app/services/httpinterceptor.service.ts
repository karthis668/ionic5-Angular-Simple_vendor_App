/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NetworkService } from './network.service';


@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService {
  constructor(
    public navctrl: NavController,
    public router: Router,
    public network: NetworkService
  ) {
    // this.network.getStatus();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('entered');
    // this.network.startListenNetwork();
    // const headers = req.headers
    //   .set(
    //     'Content-Type', 'application/json',
    //     'Authorization', '"Bearer" + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvbG9naW4iLCJpYXQiOjE2MTg0ODU0NTksImV4cCI6MTYxODQ4OTA1OSwibmJmIjoxNjE4NDg1NDU5LCJqdGkiOiI2ZUFJa0s0cTFtWHNxdGFWIiwic3ViIjo0LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.l2uiOM6b53KuI_xUJ5NrlpdTMk03t16iYxdnYzBCOjc"',
    //   );
    // const authReq = req.clone({ headers });
    const token = localStorage.getItem('user_token');
    req = req.clone({
      setHeaders: {
        'Content-Type ' : 'application/json; charset=utf-8',
        // 'Access-Control-Allow-Origin' : '*',
        Accept       : 'application/json',
        Authorization: 'Bearer'+ ' ' + token,
      },
    });
    return next.handle(req).pipe(
      catchError(err => {
        // this.network.getStatus();
        if (err.status === 401) {
          // Handle 403 specific errors
         this.navctrl.setDirection('root');
         this.router.navigate(['login']);
        }
        // else if (err.status === 401) {
        //   // Handle 401 specific errors;
        //   alert("unAuthorized")
        // }

        const error = err.error.message || err.statusText;
        return throwError(error);
      }), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // console.error(
      //   `Backend returned code ${error.status}, ` +
      //   `body was: ${error.error}`);

      // TODO :  do the logout here.
      // console.log(
      //   `Backend returned code ${error.status}, ` +
      //   `body was: ${error.error}`);
      // this.router.navigate(['/login'], { queryParams: { returnUrl: '' }});
    }
    // return an observable with a user-facing error message
    return throwError(error);

  }

}
