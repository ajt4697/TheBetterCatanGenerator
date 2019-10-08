//import Bored, { board } from './board';

let tileOffsetCSS = ["top:20.4%;left:33%;", "top:20.4%;", "top:20.4%;left:67%;", //first row
    "top:35.2%;left:24.5%;", "top:35.2%;left:41.5%;", "top:35.2%;left:58.5%;", "top:35.2%;left:75.5%;", //second row
    "left:16%;", "left:33%;", "", "left:67%;", "left:84%;", //third row
    "top:64.8%;left:24.5%;", "top:64.8%;left:41.5%;", "top:64.8%;left:58.5%;", "top:64.8%;left:75.5%;", //forth row
    "top:79.6%;left:33%;", "top:79.6%;", "top:79.6%;left:67%;"]; //fifth row

let buildBoard = () => {
    for (let [id, css] of tileOffsetCSS.entries()) {
        document.getElementById('board').innerHTML +=
            `<div class="hex" style=${css} id="tile-${id}")>
                <div class="circle" id="circle-${id}">
                </div>
            </div>`
    }
}

let generateTiles = () => {
    let board = new Bored();

}

buildBoard();


window.onresize = function () {
    document.body.height = window.innerHeight;
}
window.onresize(); // called to initially set the height.
