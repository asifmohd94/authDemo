import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  // onSubmit(token:string) {
  
  //   this.authService.postsUser(token).subscribe(resData => {
  //     console.log(resData);
  //   })
  // }

}
