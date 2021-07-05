import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  success: boolean = false;
  ngOnInit(): void {
  }

  signinUser(form: NgForm) {

    if (!form.valid) {
      return
    }
    const username = form.value.username;
    const password = form.value.password;

    this.authService.signinUser(username, password).subscribe(resData => {
      //@ts-ignore
      console.log(resData.token);
      console.log(typeof resData);
      //@ts-ignore
      localStorage.setItem('token', resData.token);
      this.success = true;

      this.router.navigate(['/content']);


    })

  }

  onSuccess() {

  }

}
