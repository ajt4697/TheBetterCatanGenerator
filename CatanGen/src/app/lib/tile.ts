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
