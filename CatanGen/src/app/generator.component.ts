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

  constructor() {
    // Desert tile will not be included in the resource array
    // It will be pushed into the final array randomly.
    this.normalNumbers = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];
    this.normalResources = ['ore', 'ore', 'ore', 'brick', 'brick', 'brick', 'sheep', 'sheep', 'sheep', 'sheep',
    'wood', 'wood', 'wood', 'wood', 'hay', 'hay', 'hay', 'hay'];

  }

  // When Generate Board button is clicked, this function is called.
  generateBoard() {
    console.log('Button has been clicked!');

    // Shuffle the number and resource arrays to randomize their order.
    const shuffledNumbers = _.shuffle(this.normalNumbers);
    const shuffledResources = _.shuffle(this.normalResources);

    // Zip the two shuffled arrays to create an array of number and resource pair arrays.
    const arr = _.zip(shuffledNumbers, shuffledResources);

    // Need to push a desert tile.
    const desert = [0, 'desert'];
    // Get a random number to represent the random index we will insert the desert at.
    const randomNum = Math.floor(Math.random() * 19);
    // Insert the desert tile.
    arr.splice(randomNum, 0, desert);


  }

}
