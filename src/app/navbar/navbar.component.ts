import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;
  navbarOpen = false;
  constructor(private afAuth: AngularFireAuth, private router: Router, public authenticationService: AuthenticationService) {
    this.user = afAuth.authState;
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    //this.router.navigateByUrl('/home');
    this.navHome();
    console.log('You are logged in');
  }
  logout() {
    this.router.navigateByUrl('/home');
    this.navHome();
    this.afAuth.auth.signOut();
    console.log('You are logged out');
  }

  isLoggedIn() {
    if (firebase.auth().currentUser !== null) {
      return true;
    } else {
      return false;
    }
  }

  navHome() {
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
    this.navHome();
  }
}
