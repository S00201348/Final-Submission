import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  email: string;
  password: string;

  constructor(public authenticationService: AuthenticationService) {}

  signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.email = ''; 
    this.password = '';
  }

  signIn() {
    this.email = ''; 
    this.password = '';
  }

  signOut() {
    this.authenticationService.SignOut();
  }
}
