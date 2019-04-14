import { Component, OnInit } from '@angular/core';
import { MensagensService } from '../services/mensagens.service';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.scss']
})
export class MensagensComponent implements OnInit {

  constructor(public mensagemService: MensagensService) { }

  ngOnInit() {
  }

}
