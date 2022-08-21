import { GameEntity } from './../../core/models/games';
import { Component, Input, OnInit } from '@angular/core';
import { GAMES } from 'src/core/globals';

@Component({
  selector: 'app-game-entity',
  templateUrl: './game-entity.component.html',
  styleUrls: ['./game-entity.component.scss']
})
export class GameEntityComponent implements OnInit, GameEntity {
  @Input() name!: string;
  @Input() img!: string;
  @Input() path!: string;
  @Input() index!: number;

  games = GAMES;
  constructor() { }

  ngOnInit(): void {
  }

}
