import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string) {
    return this.http.post('http://localhost:1500/api/register', {
      username: username,
      email: email,
      password: password
    })
  }

  signinUser(username: string, password: string) {
    return this.http.post('http://localhost:1500/api/signin', {
      username: username,
      password: password
    })
  }

  // postsUser(token: string) {
  //   return this.http.post('http://localhost:1500/api/posts', {
  //     token: token
  //   })
  // }

  logedinUser() {
    return localStorage.getItem('token');
  }

}
