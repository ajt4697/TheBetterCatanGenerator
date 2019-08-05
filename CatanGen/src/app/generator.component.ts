import { Component } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import * as _ from 'lodash';


@Component({
  selector: 'app-root',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']

})
export class GeneratorComponent {
  normalNumbers = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];
  normalResources = ['ore', 'ore', 'ore', 'brick', 'brick', 'brick', 'sheep', 'sheep', 'sheep', 'sheep',
  'wood', 'wood', 'wood', 'wood', 'hay', 'hay', 'hay', 'hay'];
  numNumbers = 18;
  numResources = 18;
  tiles = [];

  // When Generate Board button is clicked, this function is called.
  generateBoard() {
    console.log('Button has been clicked!');

    // Shuffle the number and resource arrays to randomize their order.
    const shuffledNumbers = _.shuffle(this.normalNumbers);
    const shuffledResources = _.shuffle(this.normalResources);

    // Iterate through the shuffledNumbers and create tiles with the corresponding
    // resource from shuffledNumbers.
    this.tiles = [];
    for (let i = 0; i < this.numNumbers; i++) {
      const numb = shuffledNumbers[i];
      const resource = shuffledResources[i];
      const tile = {num: numb, res: resource};
      this.tiles.push(tile);
    }

    // Need to push a desert tile.
    const desert = {num: 0, res: 'desert'};
    // Get a random number to represent the random index we will insert the desert at.
    const randomNum = Math.floor(Math.random() * 19);
    // Insert the desert tile.
    this.tiles.splice(randomNum, 0, desert);
    console.log(this.tiles);
    this.printTiles();
  }

  // This method will actually 'print' the randomized tiles to the DOM.
  // It will take in the tiles array as an argument.
  printTiles() {
    const numTiles = 19;
    for (let i = 0; i < numTiles; i ++) {
      const element = document.getElementById('tile' + i);
      if (element.classList.length === 2) {
        element.classList.remove(element.classList.item(1));
      }
      element.classList.add(this.tiles[i].res);
    }
  }
}
