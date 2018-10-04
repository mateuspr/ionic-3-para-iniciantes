import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    title: "Mateus Rodrigues",
    date: "November 5, 1955",
    description: "Estou criando um app incrivel!!",
    qtd_likes: 12,
    qtd_comments: 4,
    time_comment: "11h ago",
  }
  public lista_filmes = new Array<any>();
  public page: number = 1;
  public loading;
  public refresher;
  public isRefreshing: boolean = false;
  public infiniteScroll;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController) {

  }
  ionViewDidEnter() {
    this.carregarFilmes();
  }

  openLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });

    this.loading.present();
  }

  closeLoading() {
    this.loading.dismiss();
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2);
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }
  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.page++;
    this.carregarFilmes(true);
  }

  
  carregarFilmes(newpage: boolean = false) {
    this.openLoading();
    this.movieProvider.getLatestMovie(this.page).subscribe(
      data => {
        const response = (data as any);
        
        if(newpage){
          this.lista_filmes =this.lista_filmes.concat(response.results);
          this.infiniteScroll.complete();
        }else{
          this.lista_filmes = response.results;
        }
      }, error => {
        console.log(error);
      }
    );
    this.closeLoading();
    if(this.isRefreshing){
      this.refresher.complete();
      this.isRefreshing = false;
    }
  }

  abrirDetalhes(filme){
    console.log("Filme >>", filme);
    this.navCtrl.push(FilmeDetalhePage,{id: filme.id});
  }

}
