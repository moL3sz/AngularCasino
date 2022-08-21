import { BlackJackGameComponent } from './../app/games-components/black-jack-game/black-jack-game.component';
import { RoulettGameComponent } from './../app/games-components/roulett-game/roulett-game.component';
import { GameEntity, GameComponent } from './models/games';
export const GAMES: GameEntity[] = [
  {
    name: "Roulett",
    path: "roulett-game",
    img: 'https://img.icons8.com/color/30/000000/european-roulette.png'
  },
  {
    name: "Black Jack",
    path: "black-jack-game",
    img: 'https://img.icons8.com/external-icongeek26-flat-icongeek26/30/000000/external-Black-Jack-table-games-icongeek26-flat-icongeek26.png'
  },
  {
    name: "Texas Hold 'em",
    path: "texas-holdem-game",
    img: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/30/000000/external-poker-table-casino-flaticons-lineal-color-flat-icons.png'
  }

]

export const GameComponents: GameComponent[] = [
  {
    id: "",
    component: RoulettGameComponent
  },
  {
    id: "roulett-game",
    component: RoulettGameComponent
  },
  {
    id: "black-jack-game",
    component: BlackJackGameComponent
  },
]
export const RANDOM_SEED_API = "http://www.randomnumberapi.com/api/v1.0/uuid?count=1"


export const ROULETT_NUMBERS_ORDERED = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10,
  5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26
]
