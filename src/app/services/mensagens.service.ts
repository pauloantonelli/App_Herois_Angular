import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  public mensagens: string[] = [];

  constructor() { }

  novaMensagem(mensagem: string) {
    this.mensagens.push(mensagem);
  }

  limparMensagem() {
    this.mensagens = [];
  }
}
