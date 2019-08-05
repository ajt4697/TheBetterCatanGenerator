import { Component } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import * as _ from 'lodash';


@Component({
  selector: 'app-root',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']

})
export class GeneratorComponent {

  normalNumbers: Array<number>;
  normalResources: Array<string>;
  numNumbers: number;
  numResources: number;

  constructor() {
    // Desert tile will not be included in the resource array
    // It will be pushed into the final array randomly.
    this.normalNumbers = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];
    this.normalResources = ['ore', 'ore', 'ore', 'brick', 'brick', 'brick', 'sheep', 'sheep', 'sheep', 'sheep',
    'wood', 'wood', 'wood', 'wood', 'hay', 'hay', 'hay', 'hay'];
    this.numNumbers = 18;
    this.numResources = 18;
  }

  // When Generate Board button is clicked, this function is called.
  generateBoard() {
    console.log('Button has been clicked!');

    // Shuffle the number and resource arrays to randomize their order.
    const shuffledNumbers = _.shuffle(this.normalNumbers);
    const shuffledResources = _.shuffle(this.normalResources);

    // Create an empty array to hold the resulting tiles (resource + number combo).
    const tiles = [];
    // Iterate through the shuffledNumbers and create tiles with the corresponding
    // resource from shuffledNumbers.
    for (let i = 0; i < this.numNumbers; i++) {
      const numb = shuffledNumbers[i];
      const resource = shuffledResources[i];
      const tile = {num: numb, res: resource};
      tiles.push(tile);
    }

    // Need to push a desert tile.
    const desert = {num: 0, res: 'desert'};
    // Get a random number to represent the random index we will insert the desert at.
    const randomNum = Math.floor(Math.random() * 19);
    // Insert the desert tile.
    tiles.splice(randomNum, 0, desert);
    console.log(tiles);

  }

}
