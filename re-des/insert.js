//keeping this here for now bc im having trouble importing it
class Bored {
    constructor() {
        // this.gen();
    }
    state = {
        numArray: [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12],
        resourceArray: ["ore", "ore", "ore", "brick", "brick", "brick", "sheep"
            , "sheep", "sheep", "sheep", "wood", "wood", "wood", "wood",
            "wheat", "wheat", "wheat", "wheat",]
    }

    gen = () => {
        let randomNumbers = this.state.numArray
        let randomResources = this.state.resourceArray
        let tiles = []

        for (let x in randomNumbers) {
            let tile = Object()
            tile.chit = randomNumbers[x]
            tile.resource = randomResources[x]
            tiles.push(tile)
        }

        let dessert = Object()
        dessert.resource = "desert"
        dessert.chit = ""
        tiles.push(dessert)

        console.log(tiles)
        return tiles
    }
}

////end what should not be in this file

let tileOffsetCSS = ["top:20.4%;left:33%;", "top:20.4%;", "top:20.4%;left:67%;", //first row
    "top:35.2%;left:24.5%;", "top:35.2%;left:41.5%;", "top:35.2%;left:58.5%;", "top:35.2%;left:75.5%;", //second row
    "left:16%;", "left:33%;", " ", "left:67%;", "left:84%;", //third row
    "top:64.8%;left:24.5%;", "top:64.8%;left:41.5%;", "top:64.8%;left:58.5%;", "top:64.8%;left:75.5%;", //forth row
    "top:79.6%;left:33%;", "top:79.6%;", "top:79.6%;left:67%;"]; //fifth row

let buildBoard = () => {
    for (let [id, css] of tileOffsetCSS.entries()) {
        console.log(id)
        document.getElementById('board').innerHTML +=
            `<div class="hex" style="${css}" id="tile-${id}")>
                <div class="circle" id="circle-${id}">
                </div>
            </div>`
    }
}

let generateTiles = () => {
    let board = new Bored();
    let tiles = board.gen();
    //console.log(tiles);
    for (let [id, tile] of tiles.entries()) {
        //console.log(`${tile.chit} for ${tile.resource}`)
        console.log(id)
        //document.getElementById(`tile-${id}`).classList.add(tile.resource);
        //document.getElementById(`circle-${id}`).innerHTML = `<h2>${tile.chit}</h2>`
    }
}

buildBoard();
generateTiles();
// document.getElementById('tile-1').classList.add('desert');
// document.getElementById('circle-1').innerHTML = `<h2>12</h2>`


window.onresize = function () {
    document.body.height = window.innerHeight;
}
window.onresize(); // called to initially set the height.
