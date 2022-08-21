import { GameComponent } from './../../core/models/games';
import { GameDirective } from './../shared/game-directive';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { GameComponents } from 'src/core/globals';

@Component({
  selector: 'app-game-provider',
  templateUrl: './game-provider.component.html',
  styleUrls: ['./game-provider.component.scss']
})
export class GameProviderComponent implements  OnChanges {

  constructor() { }
  @Input() selectedGame: string = '';

  @ViewChild(GameDirective, { static: true }) gameProvider!: GameDirective;



  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['selectedGame'].currentValue)
    if (changes['selectedGame']) {

      const viewContainerRef = this.gameProvider.viewContainerRef;
      viewContainerRef.clear();
      const selectedComponent: GameComponent = GameComponents.filter((game)=>game.id === changes['selectedGame'].currentValue)[0]
      viewContainerRef.createComponent(selectedComponent.component);


    }
  }
}
