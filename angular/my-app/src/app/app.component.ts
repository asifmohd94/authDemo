import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  registerUser(form: NgForm) {
    if (!form.valid) {
      return
    }

    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;

    this.authService.register(username, email, password).subscribe(resData => {
      console.log("User Created");
      this.router.navigate(['/content']);

    })
  }

}
