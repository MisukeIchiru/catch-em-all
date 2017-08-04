import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { KartePage } from '../pages/karte/karte';
import { ChatPage } from '../pages/chat/chat';
import { HomePage } from '../pages/home/home';
import { EinstellungenPage } from '../pages/einstellungen/einstellungen';
import { Beitreten } from '../pages/beitreten/beitreten';
import { Erstellen } from '../pages/erstellen/erstellen';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    KartePage,
    ChatPage,
    HomePage,
    EinstellungenPage,
    TabsPage,
    Erstellen,
    Beitreten
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    KartePage,
    ChatPage,
    HomePage,
    EinstellungenPage,
    Erstellen,
    Beitreten,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
