
let tileOffsetCSS = ["top:20.4%;left:33%;", "top:20.4%;", "top:20.4%;left:67%;", //first row
    "top:35.2%;left:24.5%;", "top:35.2%;left:41.5%;", "top:35.2%;left:58.5%;", "top:35.2%;left:75.5%;", //second row
    "left:16%;", "left:33%;", " ", "left:67%;", "left:84%;", //third row
    "top:64.8%;left:24.5%;", "top:64.8%;left:41.5%;", "top:64.8%;left:58.5%;", "top:64.8%;left:75.5%;", //forth row
    "top:79.6%;left:33%;", "top:79.6%;", "top:79.6%;left:67%;"]; //fifth row


//keeping this here for now bc im having trouble importing it
let resourceTypes = ["ore", "sheep", "brick", "wood", "wheat","desert"];
let prob = ["", "", ".", "..", "...", "....", ".....", "", "....", "...", "..", "..", ".",]
state = {
    numArray: [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    resourceArray: ["ore", "ore", "ore", "brick", "brick", "brick", "sheep"
        , "sheep", "sheep", "sheep", "wood", "wood", "wood", "wood",
        "wheat", "wheat", "wheat", "wheat",],
    prob: ["", "", ".", "..", "...", "....", ".....", "", ".....", "....", "...", "..", ".",]

}

// Represents adjacencies of tiles on the board.
// Format --> tile # : [adjacent tiles]
let adjacencyList = {

  0 : [1,3,4],
  1 : [0,2,4,5],
  2 : [1,5,6],
  3 : [0,4,7,8],
  4 : [0,1,3,5,8,9],
  5 : [1,2,4,6,9,10],
  6 : [2,5,10,11],
  7 : [3,8,12],
  8 : [3,4,7,9,12,13],
  9 : [4,5,8,10,13,14],
  10 : [5,6,9,11,14,15],
  11 : [6,10,15],
  12 : [7,8,13,16],
  13 : [8,9,12,14,16,17],
  14 : [9,10,13,15,17,18],
  15 : [10,11,14,18],
  16 : [12,13,17],
  17 : [13,14,16,18],
  18 : [14,15,17]

}






// This shuffle algorithm is used to shuffle both the resources and the numbers.
// Following that, it is used to shuffled the Tiles array created in gen().
// This algorithm shuffles the array in place.
// Algorithm from here: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
let shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


// Checks the adjacencies of the specified tile.
// Returns true if adjacency present.
// Returns false if no adjacency present.



// Checks over each number in the randomized number array.
// If a number is a 6 or an 8, check its adjacencies.
// If there is a 6 or 8 in its adjacencies, return true, AKA there are adjacencies present.
// If it goes through whole array and does not encounter adjacent 6 and 8s, return false,
// AKA there are no adjacencies present.
let passedAdjacencyTest = (tilesArr) => {
  for (let [boardLocation,  tile] of tilesArr.entries()) {
    if (tile.chit== 6 || tile.chit == 8) {
      for (adj of adjacencyList[boardLocation]) {
        if ( tilesArr[adj].chit == 6 || tilesArr[adj].chit == 8) return false
      }
    }
  }
  return true
}

let passedResourceCheck = (tilesArr) => {
  for (let [boardLocation, tile] of tilesArr.entries()) {
      let resource = tile.resource
      let count = 1;
      for (adj of adjacencyList[boardLocation]) {
         // console.log (` ${resource} == ${tilesArr[adj].resource}`)
          if(resource == tilesArr[adj].resource){
            // console.log (`HIT`)
            count++
          }
      }
      // console.log(count)
      if (count > 2) {
        return false
      }
  }
  return true
}



// This method just creates and returns the array of tiles (tile information)
// that generateTiles() uses to present the tiles to the board in HTML form.
let gen = () => {
    let randomNumbers = shuffle(this.state.numArray)
    let randomResources = shuffle(this.state.resourceArray)
    let probArr = this.state.prob;
    let tiles = []

    for (let x in randomNumbers) {
        let tile = Object()
        tile.chit = randomNumbers[x]
        tile.resource = randomResources[x]
        tile.probability = probArr[tile.chit]
        tiles.push(tile)
    }

    let desert = Object()
    desert.resource = "desert"
    desert.chit = ""
    desert.probability = ""
    tiles.push(desert)

    //console.log(tiles)
    return shuffle(tiles)
}


////end what should not be in this file

let buildBoard = () => {

    ///////messeses with overflow so its commented out
    // document.getElementById('board').innerHTML += `<div id="test-outer"></div>`

    for (let [id, css] of tileOffsetCSS.entries()) {

        document.getElementById('board').innerHTML +=
            `<div class="hex" style="${css}" id="tile-${id}")>
                <div class="circle" id="circle-${id}">
                </div>
            </div>`
    }
}

// This method is called when the button is pressed.
// This is how the DOM interacts with the JS part.
let generateBoard = () => {
    event.preventDefault();
    // console.log(`test`)
    //state.numArray = state.numArray.sort((a, b) => { 0.5 - Math.random() })
    // state.resourceArray.sort((a, b) => { 0.5 - Math.random() })
    // state.numArray.reverse();
    generateTiles();



}

// This handles the HTML component/displaying of the tiles using the array
// returned by gen().
let generateTiles = () => {


  //  let tiles = gen();
  //   while(!passedAdjacencyTest(tiles) && !passedResourceCheck(tiles))
  //   {
  //     tiles = gen();
  //     console.log("new board (before checking)")
  //     console.log(tiles)
  //   }
    let tiles = gen();
      do {
        tiles = gen();
      } while(!passedAdjacencyTest(tiles) || !passedResourceCheck(tiles))


    for (let [id, tile] of tiles.entries()) {

        let theTile = document.getElementById(`tile-${id}`);
        let theCircle = document.getElementById(`circle-${id}`);

        //console.log(theTile.classList)


        for (let currentResource of theTile.classList) {
            if (resourceTypes.includes(currentResource)) {
                theTile.classList.remove(currentResource);
                break
            }
        }
        theTile.classList.add(tile.resource);
        theCircle.innerHTML = `<h2>${tile.chit}</h2>`

        if (tile.chit == 8 || tile.chit == 6) {
            theTile.classList.add("high-prob")
        } else {
            theTile.classList.remove("high-prob")
            //theTile.style.color = "black";
        }

        if (tile.resource == "desert") {
            theCircle.classList.add("desert-chit")
        } else {
            theCircle.classList.remove("desert-chit")
            theCircle.innerHTML += `<h3>${tile.probability}</h3>`
        }
    }
}

// These functions are called initially upon loading the page for the first time.
// buildBoard() creates the HTML hexagon & chit elements for the board.
// generateTiles() handles the displaying of the resources and numbers.
buildBoard();
generateTiles();



// theTile.style.backgroundImage = `url(./assets/${tile.resource}.png)`;

//  document.getElementById(`tile-${id}`).classList.add(tile.resource);

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
