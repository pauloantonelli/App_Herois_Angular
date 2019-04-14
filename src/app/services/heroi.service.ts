import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../lista-heroes';
import { Observable, of } from 'rxjs';
import { MensagensService } from './mensagens.service';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  constructor(private mensagensService: MensagensService) { }

  getHerois(): Observable<Hero[]> {
    // envia a mensagem DEPOIS de procurar pelos herois e ter sucesso
    console.log(of(Heroes));
    this.mensagensService.novaMensagem('HeroService: procura por herois');
    return of(Heroes);
  }
}
