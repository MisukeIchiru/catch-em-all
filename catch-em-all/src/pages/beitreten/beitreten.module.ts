import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Beitreten } from './beitreten';

@NgModule({
  declarations: [
    Beitreten,
  ],
  imports: [
    IonicPageModule.forChild(Beitreten),
  ],
  exports: [
    Beitreten
  ]
})
export class BeitretenModule {}
