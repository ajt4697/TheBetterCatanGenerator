//keeping this here for now bc im having trouble importing it

let prob = ["", "", ".", "..", "...", "....", "......", "", "....", "...", "..", "..", ".",]
state = {
    numArray: [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    resourceArray: ["ore", "ore", "ore", "brick", "brick", "brick", "sheep"
        , "sheep", "sheep", "sheep", "wood", "wood", "wood", "wood",
        "wheat", "wheat", "wheat", "wheat",],
    prob: ["", "", ".", "..", "...", "....", "......", "", "....", "...", "..", "..", ".",]

}

let gen = () => {
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


////end what should not be in this file

let tileOffsetCSS = ["top:20.4%;left:33%;", "top:20.4%;", "top:20.4%;left:67%;", //first row
    "top:35.2%;left:24.5%;", "top:35.2%;left:41.5%;", "top:35.2%;left:58.5%;", "top:35.2%;left:75.5%;", //second row
    "left:16%;", "left:33%;", " ", "left:67%;", "left:84%;", //third row
    "top:64.8%;left:24.5%;", "top:64.8%;left:41.5%;", "top:64.8%;left:58.5%;", "top:64.8%;left:75.5%;", //forth row
    "top:79.6%;left:33%;", "top:79.6%;", "top:79.6%;left:67%;"]; //fifth row

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

let test = () => {
    event.preventDefault();
    console.log(`test`)
    state.resourceArray.reverse();
    generateTiles();
}

let generateTiles = () => {

    let tiles = gen();

    for (let [id, tile] of tiles.entries()) {

        // let thetile = document.getElementById(`tile-${id}`).style.backgroundImage = `url(./assets/${tile.resource}.png)`;
        // let theCircle = document.getElementById(`circle-${id}`).innerHTML = `<h2>${tile.chit}</h2><br><h3>.</h3>`

        document.getElementById(`tile-${id}`).style.backgroundImage = `url(./assets/${tile.resource}.png)`;
        document.getElementById(`circle-${id}`).innerHTML = `<h2>${tile.chit}</h2>`

        if (tile.resource == "desert") {
            document.getElementById(`circle-${id}`).classList.add("desert-chit")
        } else {
            document.getElementById(`circle-${id}`).classList.remove("desert-chit")
            document.getElementById(`circle-${id}`).innerHTML += `<h3>${prob[tile.chit]}</h3>`
        }
    }
}

buildBoard();
generateTiles();







window.onresize = function () {
    document.body.height = window.innerHeight;
}
//window.onresize(); // called to initially set the height.


  //  document.getElementById(`tile-${id}`).classList.add(tile.resource);
