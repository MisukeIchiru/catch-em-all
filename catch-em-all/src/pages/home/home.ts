import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Beitreten } from '../beitreten/beitreten';
import { Erstellen } from '../erstellen/erstellen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  goErstellen = Erstellen;
  goBeitreten = Beitreten;

  constructor(public navCtrl: NavController) {

  }

}
