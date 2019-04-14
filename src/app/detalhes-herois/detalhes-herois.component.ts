import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-detalhes-herois',
  templateUrl: './detalhes-herois.component.html',
  styleUrls: ['./detalhes-herois.component.sass']
})
export class DetalhesHeroisComponent implements OnInit {

  @Input() heroi: Hero;

  constructor() { }

  ngOnInit() {
  }

}
