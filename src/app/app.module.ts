import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { DetalhesHeroisComponent } from './detalhes-herois/detalhes-herois.component';
import { MensagensComponent } from './mensagens/mensagens.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetalhesHeroisComponent,
    MensagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
