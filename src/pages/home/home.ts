import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 timer: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    this.timer = setInterval(() => {
      this.setData();
    }, 1000);
  }

  setData(){

let date = new Date().toLocaleDateString();

let time = new Date().toLocaleTimeString();

let both = date + ' ' + time;

console.log(both);

}

 ionViewWillLeave() {
    clearTimeout(this.timer);
  }

}
