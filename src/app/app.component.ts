import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import firebase from 'firebase';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild('nav') nav: NavController;
  rootPage: any = TabsPage;
  SigninPage = SigninPage;
    SignupPage = SignupPage;
    TabsPage = TabsPage;
    HomePage = HomePage;
    isAuthenticated = false;

  constructor(private menuCtrl: MenuController,
                private authService: AuthService) 
  {
    firebase.initializeApp({
        apiKey: "AIzaSyDV0jxSu_BYBSpAP23aiWKdCgg9VUbGKI0",
        authDomain: "cemasadminpwa.firebaseapp.com",
      });

      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.isAuthenticated = true;
          this.nav.setRoot(this.rootPage);
        } else {
          this.isAuthenticated = false;
          this.nav.setRoot(this.SigninPage);
        }
      });

  }

  onLoad(page:any){
      this.nav.setRoot(page);
      this.menuCtrl.close();
    }

    onLogout(){
      this.authService.logout();
      this.menuCtrl.close();
    }
}