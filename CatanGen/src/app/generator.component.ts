import { Component, OnInit, AfterViewInit } from '@angular/core';
import { normalTriples, extensionTriples } from './lib/triples';
import * as _ from 'lodash';


// A separate class to represent a tile object.
export class Tile {
  num: number;
  res: string;

  constructor(num, res) {
    this.num = num;
    this.res = res;
  }

  // Returns the number of the Tile object.
  getNumber() {
    return this.num;
  }

  // Returns the resource of the Tile object.
  getResource() {
    return this.res;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']

})
export class GeneratorComponent implements OnInit, AfterViewInit {
  normalNumbers = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];
  normalResources = ['ore', 'ore', 'ore', 'brick', 'brick', 'brick', 'sheep', 'sheep', 'sheep', 'sheep',
    'wood', 'wood', 'wood', 'wood', 'hay', 'hay', 'hay', 'hay'];
  numNormalNumbers = 18;
  numNormalResources = 18;

  extensionNumbers = [2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 8, 8, 8, 9, 9, 9,
    10, 10, 10, 11, 11, 11, 12, 12];
  extensionResources = ['ore', 'ore', 'ore', 'ore', 'ore',
    'brick', 'brick', 'brick', 'brick', 'brick',
    'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep',
    'wood', 'wood', 'wood', 'wood', 'wood', 'wood',
    'hay', 'hay', 'hay', 'hay', 'hay', 'hay'];
  numExtNumbers = 28;
  numExtResources = 28;
  tiles: Array<Tile>;

  mode = 'normal';
  threeTouchAllowed = true;

  // This is a lifecycle hook function.
  // To avoid errors with the ngIf directives in the HTML file,
  // call generateBoard() as soon as the page is initialized.
  ngOnInit() {
    this.generateBoard();
  }

  ngAfterViewInit() {
    // this.generateBoard(this.getMode());
  }

  // When Generate Board button is clicked, this function is called.
  generateBoard() {
    if (this.getMode() === 'normal') {
      this.generateNormal();
    } else if (this.getMode() === 'extension') {
      this.generateExtension();
    }

  }

  // Generates the tiles for the normal board.
  generateNormal() {
    // Shuffle the number and resource arrays to randomize their order.
    const shuffledNumbers = _.shuffle(this.normalNumbers);
    const shuffledResources = _.shuffle(this.normalResources);

    // Iterate through the shuffledNumbers and create tiles with the corresponding
    // resource from shuffledNumbers.
    this.tiles = [];
    for (let i = 0; i < this.numNormalNumbers; i++) {
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
    // console.log(this.tiles);

    // Call the printTiles function to then display the resources.
    this.printResources();
    // this.printNumbers();
    if (this.threeTouchAllowed === false) {
      this.threeTouchCheck();
    }
  }

  // Generates the tiles for the extension board.
  generateExtension() {
    // Shuffle the number and resource arrays to randomize their order.
    const shuffledNumbers = _.shuffle(this.extensionNumbers);
    const shuffledResources = _.shuffle(this.extensionResources);

    // Iterate through the shuffledNumbers and create tiles with the corresponding
    // resource from shuffledNumbers.
    this.tiles = [];
    for (let i = 0; i < this.numExtNumbers; i++) {
      const numb = shuffledNumbers[i];
      const resource = shuffledResources[i];
      const newTile = new Tile(numb, resource);
      this.tiles.push(newTile);
    }

    // Need to push two desert tiles.
    const desert1 = new Tile(0, 'desert');
    const desert2 = new Tile(0, 'desert');
    // Get two random numbers to represent the random indices we will insert the deserts at.
    const randomNum1 = Math.floor(Math.random() * 29);
    const randomNum2 = Math.floor(Math.random() * 30);
    // Insert the desert tiles.
    this.tiles.splice(randomNum1, 0, desert1);
    this.tiles.splice(randomNum2, 0, desert2);
    // console.log(this.tiles);

    // Call the printTiles function to then display the resources.
    this.printResources();
    // this.printNumbers();
    if (this.threeTouchAllowed === false) {
      this.threeTouchCheck();
    }

  }



  // This method will actually 'print' the randomized resources to the DOM.
  // It will use the global tiles variable, filled in the generateBoard() function.
  // I chose to keep this as a separate method b/c it will be easier for future.
  printResources() {
    const numTiles = this.getMode() === 'normal' ? 19 : 30;
    // Iterate through the tiles...
    for (let i = 0; i < numTiles; i++) {
      // Grab a single tile by its id.
      const tileID = this.getMode() === 'normal' ? 'tile' : 'etile';
      const element = document.getElementById(tileID + i);
      // console.log(element);
      // If the tile already had a resource class assigned...
      if (element.classList.length === 2) {
        // Remove the resource.
        element.classList.remove(element.classList.item(1));
      }
      // Push the new resource class!
      element.classList.add(this.tiles[i].getResource());
    }
  }

  // This function was made to assign numbers to the chits.
  // It's not working right now, so now I use text binding in the HTML file.
  printNumbers() {
    const numChits = this.getMode() === 'normal' ? 19 : 30;
    // Iterate through the chits...
    for (let i = 0; i < numChits; i++) {
      // Grab a single chit by its id.
      const chitID = this.getMode() === 'normal' ? 'chit' : 'echit';
      const element = document.getElementById('chitID' + i);
      // Change the inner text of the chit.
      element.textContent = this.getNumberByIndex(i).toString();
    }
  }

  // Returns the array of randomized Tile objects.
  getTiles() {
    return this.tiles;
  }

  // Returns specified Tile object from the tiles array.
  getTileByIndex(idx: number) {
    return this.tiles[idx];
  }

  // Returns the resource of specified Tile object.
  getResourceByIndex(idx: number) {
    return this.tiles[idx].getResource();
  }

  // Returns the number of specified Tile object.
  getNumberByIndex(idx: number) {
    return this.tiles[idx].getNumber();
  }

  getMode() {
    return this.mode;
  }

  toggleToNormal() {
    this.mode = 'normal';
  }

  toggleToExtension() {
    this.mode = 'extension';
  }

  toggleToTrueRandom() {
    this.threeTouchAllowed = true;
  }

  toggleToRuleAbiding() {
    this.threeTouchAllowed = false;
  }

  // Goes through each triple and checks if three tiles of same resource
  // are touching. If so, the board is just regenerated, and checked again.
  threeTouchCheck() {

    if (this.getMode() === 'normal') {
      // Iterate through the array of triples.
      for (let i = 0; i < normalTriples.length; i++) {

        // Get the current triple and each tile's resource in that triple.
        const currTriple = normalTriples[i];
        const tileRes1 = this.getResourceByIndex(currTriple[0]);
        const tileRes2 = this.getResourceByIndex(currTriple[1]);
        const tileRes3 = this.getResourceByIndex(currTriple[2]);

        // If the tiles' resources all match, regenerate the board.
        if (tileRes1 === tileRes2 && tileRes1 === tileRes3 && tileRes2 === tileRes3) {
          console.log('bad boy');
          this.generateBoard();
        }

      }

    } else if (this.getMode() === 'extension') {
      // Iterate through the array of triples.
      for (let i = 0; i < extensionTriples.length; i++) {

        // Get the current triple and each tile's resource in that triple.
        const currTriple = extensionTriples[i];
        const tileRes1 = this.getResourceByIndex(currTriple[0]);
        const tileRes2 = this.getResourceByIndex(currTriple[1]);
        const tileRes3 = this.getResourceByIndex(currTriple[2]);

        // If the tiles' resources all match, regenerate the board.
        if (tileRes1 === tileRes2 && tileRes1 === tileRes3 && tileRes2 === tileRes3) {
          console.log('bad boy');
          this.generateBoard();
        }

      }

    }



  }

}
