import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SobrePage } from './../sobre/sobre';
import { PerfilPage } from './../perfil/perfil';

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {
  rootPage = PerfilPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }
  openPage(page){
      this.navCtrl.push(page);
  }
  abrirPerfil(){
    this.navCtrl.push(PerfilPage);
  }
  abrirSobre(){
    this.navCtrl.push(SobrePage);
  }

}
