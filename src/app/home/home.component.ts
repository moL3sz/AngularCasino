import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  selectedGame: string = ''
  constructor() { }

  ngOnInit(): void {
  }


  setSelectedGame(gameId: any) {
    console.log(gameId)
    this.selectedGame = gameId;
  }



}
