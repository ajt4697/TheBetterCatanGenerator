import { Component } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import Bored from './Bored'
@Component({
  //this is a decorater, its kinda a method but you pass an object.. idk i lsot you
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'CatanGen';
  inner = '<div class="two">two</div>';

  // When Generate Board button is clicked, this function is called.
  onClick() {
    console.log('Button has been clicked!');
    // When this button is clicked, ideally it will either:
    // 1. Generate the board
    // 2. Call the appropriate generate function

    // let canvas = <HTMLCanvasElement>document.getElementById('board');
    // let context = canvas.getContext('2d');
    // const img = new Image();
    // img.src = '../assets/images/wood.png';
    // context.drawImage(img, 0, 0);

    let h1 = <HTMLCanvasElement>document.getElementById('test');

    let obj = new Bored()

    h1.innerHTML = obj.gen()

  }

}
