import { ROULETT_NUMBERS_ORDERED } from './../../../core/globals';
import { RoulettService } from './roulett.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roulett-game',
  templateUrl: './roulett-game.component.html',
  styleUrls: ['./roulett-game.component.scss']
})
export class RoulettGameComponent implements OnInit {

  constructor(private roulettService: RoulettService) { }

  currentSeed!: string;
  roulettNumbers = ROULETT_NUMBERS_ORDERED;
  ngOnInit(): void {
    this.roulettService.getSeed().then(({ seed }) => {
      this.currentSeed = seed;
      this.roulettService.generateRandomNumber(seed);
    })
  }

}
