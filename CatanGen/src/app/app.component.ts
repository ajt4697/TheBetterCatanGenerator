import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CatanGen';

  // When Generate Board button is clicked, this function is called.
  onClick() {
      console.log('Button has been clicked!');
      // When this button is clicked, ideally it will either:
      // 1. Generate the board
      // 2. Call the appropriate generate function

      let canvas = <HTMLCanvasElement> document.getElementById('board');
      let context = canvas.getContext('2d');
      const img = new Image();
      img.src = '../assets/images/wood.png';
      context.drawImage(img, 0, 0);
  }

}
