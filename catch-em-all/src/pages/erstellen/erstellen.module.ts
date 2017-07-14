import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Erstellen } from './erstellen';

@NgModule({
  declarations: [
    Erstellen,
  ],
  imports: [
    IonicPageModule.forChild(Erstellen),
  ],
  exports: [
    Erstellen
  ]
})
export class ErstellenModule {}
