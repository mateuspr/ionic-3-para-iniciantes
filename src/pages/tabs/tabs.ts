import { Component } from '@angular/core';
import { FeedPage } from './../feed/feed';
import { HomePage } from '../home/home';
import { ConfiguracoesPage } from './../configuracoes/configuracoes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = FeedPage;
  tab5Root = ConfiguracoesPage;

  constructor() {

  }
}
