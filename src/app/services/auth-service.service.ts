import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { UtilService } from './util.service';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { UserSignup } from '../models/user-signup';
import { environment } from '../../environments/environment';
import { AUTH_ID } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 user: User | undefined;
  httpHeaders: HttpHeaders;
  constructor(private httpClient: HttpClient, private utilService: UtilService) {
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
    this.LoadAuthUser();
  }

  ValidateUser(model: Login): Observable<HttpResponse<User>> {
    debugger
    // return this.httpClient.post<User>(environment.apiAddress + 'api/auth/validateuser', JSON.stringify(model), { headers: this.httpHeaders, observe:'response' });
 return this.httpClient.post<User>(environment.apiAddress + '/auth/validateuser', JSON.stringify(model), {headers:this.httpHeaders,observe:'response'  });


  }

  UserSignUp(model: UserSignup): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(environment.apiAddress + '/auth/createuser', JSON.stringify(model), { headers: this.httpHeaders, observe: 'response' });
  }

  private LoadAuthUser() {
    const encData = localStorage.getItem(AUTH_ID);
    if (encData !== undefined && encData !== null) {
      this.user = this.utilService.Decrypt(encData);
    } else {
      this.user = undefined;
    }
    console.log(this.user);
  }

  SetAuthUser(user: User) {
    console.log('Auth info', JSON.stringify(user));
    let userData = this.utilService.Encrypt(user);
    localStorage.setItem(AUTH_ID, userData);
    this.LoadAuthUser();
  }

  RemoveAuthUser() {
    const data = localStorage.getItem(AUTH_ID);
    if (data !== undefined && data !== null) {
      localStorage.removeItem(AUTH_ID);
      this.user = undefined;
    } else {
      this.user = undefined;
    }
    this.LoadAuthUser();
  }
}
