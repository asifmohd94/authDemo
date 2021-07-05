import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { ContentComponent } from './content/content.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ContentComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };