import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

export interface Profile {
  _id: string;
  name: string;
  slug: string;
  date_created: string;
  date_modified: string;
  language: string;
  locale: string;
  original_locale: string;
  first_name: string;
  last_name: string;
  sex: string;
  mobile: string;
  status: string;
  date_birthday: string;
}

export interface User {
  _id: string;
  slug: string;
  username: string;
  emails: string[];
  roles: string[];
  uniq_user_id: string;
}

export interface Account {
  access_token: string;
  profile: Profile;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  doLogin() {
    const body = new URLSearchParams();
    if (environment.credentials) {
      body.set('username', environment.credentials.username);
      body.set('password', environment.credentials.password);
      body.set('client_id', environment.credentials.client_id);
      body.set('grant_type', environment.credentials.grant_type);
    }
    return this.httpClient.post<Account>(`${environment.apiBase}/v1/account/validate`, body.toString(), {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded'
      })
    });
  }
}
