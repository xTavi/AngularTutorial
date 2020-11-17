import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, first, tap } from 'rxjs/operators';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) {

  }

  loginUser(userName: string, password: string) {
    const loginInfo = { username: userName, password: password}
    const options = { hearders: new HttpHeaders({ 'Content-Type': 'application/json' })};

    return this.http.post('/api/login', loginInfo).
    pipe(tap(data => {
      this.currentUser = <IUser>data['user'];
    })).
    pipe(catchError(err => {
      return of (false);
    }));

    // this.currentUser = {
    //   id: 1,
    //   userName: userName,
    //   firstName: 'John',
    //   lastName: 'Papa'
    // };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity')
    .pipe(tap( data => {
      if (data instanceof Object) {
        this.currentUser = <IUser>data;
      }
    }))
    .subscribe();
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
