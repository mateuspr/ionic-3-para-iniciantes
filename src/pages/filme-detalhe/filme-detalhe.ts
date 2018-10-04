
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';


@IonicPage()
@Component({
  selector: 'page-filme-detalhe',
  templateUrl: 'filme-detalhe.html',
  providers: [
    MovieProvider
  ]
})
export class FilmeDetalhePage {

  public filme;
  public filmeID;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MovieProvider) {
  }

  ionViewDidEnter() {
    this.filmeID = this.navParams.get("id");
    this.movieProvider.getMovieDetails(this.filmeID).subscribe(
      data => {
        const response = (data as any);
        console.log("Detail>>", response)
        this.filme = response;
        /*let retorno = (data as any)._body;
        this.filme = JSON.parse(retorno);*/
      },
      error => {
        console.log(error);
      }
    )
      ;
  }

}
