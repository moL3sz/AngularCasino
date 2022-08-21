import { RANDOM_SEED_API } from './../../../core/globals';
import { Injectable } from '@angular/core';
import * as seedrandom from "seedrandom"
@Injectable({
  providedIn: 'root'
})
export class RoulettService {

  constructor() { }
  //roulett logincs goes here



  async getSeed(): Promise<{ seed: string }>{
    const response = await fetch(RANDOM_SEED_API)
    const data = await response.json()
    return {
      seed: data[0]
    }
  }
  generateRandomNumber(seed: string): number{
    try {
      const rng = seedrandom(seed, {entropy: true});
      const roulettNumber = Math.floor(rng() * 35);
      console.log(roulettNumber)
      return roulettNumber;
    } catch (e) {
      return -1
    }
  }
  //TODO
  /*
    generate a random seed from an api
    use this seed to generate a random number accordingly to roulett rules

    - perform a good anumation
    - create a layout for  the roluett using html scss tailwind
  */
}
