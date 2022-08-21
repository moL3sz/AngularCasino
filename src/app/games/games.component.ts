import { GameEntity } from './../../core/models/games';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GAMES } from 'src/core/globals';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: GameEntity[] = GAMES
  constructor() { }
  @Output() selectedGameEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }
  setSelectedGame(gameId: string): void{
    this.selectedGameEvent.emit(gameId)
  }

}
