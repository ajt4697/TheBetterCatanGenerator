import { Component } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import * as _ from 'lodash';


// A separate class to represent a tile object.
export class Tile {
  num: number;
  res: string;

  constructor(num, res) {
    this.num = num;
    this.res = res;
  }

  getNumber() {
    return this.num;
  }

  getResource() {
    return this.res;
  }
}


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

    // Shuffle the number and resource arrays to randomize their order.
    const shuffledNumbers = _.shuffle(this.normalNumbers);
    const shuffledResources = _.shuffle(this.normalResources);

    // Iterate through the shuffledNumbers and create tiles with the corresponding
    // resource from shuffledNumbers.
    this.tiles = [];
    for (let i = 0; i < this.numNumbers; i++) {
      const numb = shuffledNumbers[i];
      const resource = shuffledResources[i];
      const newTile = new Tile(numb, resource);
      this.tiles.push(newTile);
    }

    // Need to push a desert tile.
    const desert = new Tile(0, 'desert');
    // Get a random number to represent the random index we will insert the desert at.
    const randomNum = Math.floor(Math.random() * 19);
    // Insert the desert tile.
    this.tiles.splice(randomNum, 0, desert);
    console.log(this.tiles);

    // Call the printTiles function to then display the resources.
    this.printTiles();
  }


  // This method will actually 'print' the randomized tiles to the DOM.
  // It will use the global tiles variable, filled in the generateBoard() function.
  // I chose to keep this as a separate method b/c it will be easier for future.
  printTiles() {
    const numTiles = 19;
    // Iterate through the tiles...
    for (let i = 0; i < numTiles; i ++) {
      // Grab a single tile by its id.
      const element = document.getElementById('tile' + i);
      // If the tile already had a resource class assigned...
      if (element.classList.length === 2) {
        // Remove the resource.
        element.classList.remove(element.classList.item(1));
      }
      // Push the new resource class!
      element.classList.add(this.tiles[i].getResource());
    }
  }

  getTiles() {
    return this.tiles;
  }

  getTileByIndex(idx) {
    return this.tiles[idx];
  }

}



