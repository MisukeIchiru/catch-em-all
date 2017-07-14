import { Component } from '@angular/core';

import { KartePage } from '../karte/karte';
import { ChatPage } from '../chat/chat';
import { HomePage } from '../home/home';
import { EinstellungenPage } from '../einstellungen/einstellungen';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = KartePage;
  tab3Root = ChatPage;
  tab4Root = EinstellungenPage;

  constructor() {

  }
}
