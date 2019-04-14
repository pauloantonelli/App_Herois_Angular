import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroiService } from '../services/heroi.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public listaHeroes: Hero[];

  public hero: Hero = {
    id: 1,
    name: 'Tempestade',
  };
  public heroiEscolhido: Hero;

  constructor(private servicoHeroi: HeroiService) { }

  ngOnInit() {
    this.obterListaHerois();
  }
  EscolhaHeroi(heroi: Hero): void {
    this.heroiEscolhido = heroi;
  }
  obterListaHerois(): void {
    this.servicoHeroi.getHerois().subscribe(
      (heroi) => {
        console.log('obterndo dados para UI');
        this.listaHeroes = heroi;
      },
      (erro) => {

      },
      () => {
        console.log('UI liberada do load');
      }
    );
  }
}
