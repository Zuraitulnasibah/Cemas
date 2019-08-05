import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(private authService: AuthService,
				private loadingCtrl: LoadingController,
				private alertCtrl: AlertController) {
  }

  onSignin(form: NgForm){
		const loading = this.loadingCtrl.create({
			content: 'Signing you in...' //you can add GIF on your loading
		});
		loading.present();
		this.authService.signIn(form.value.email, form.value.password)
						.then(data => {
							loading.dismiss();
							const alert = this.alertCtrl.create({
								title: 'Sign In',
								message: "Successful login!",
								buttons: ['OK']
							});
							alert.present();
						})

						.catch( error => {
							loading.dismiss();
							const alert = this.alertCtrl.create({
								title: 'Sign In Failed',
								message: error.message,
								buttons: ['OK']
							});
							alert.present();
						});
	}

}
