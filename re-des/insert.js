hello();
nextRow();
lowerRow();
thetop();
thebottom();


function hello() {
    let offset = ["left:16%;", "left:33%;", "left:67%;", "left:84%;", ""];
    for (let x of offset) {
        console.log(x);
        document.getElementById('full-width').innerHTML +=
            '<div class="hex" style =' + x + ')></div>';
    }
}



function nextRow() {
    let offset = ["top:35.2%;left:58.5%;", "top:35.2%;left:41.5%;", "top:35.2%;left:24.5%;", "top:35.2%;left:75.5%;",]
    for (let x of offset) {
        console.log(x);
        document.getElementById('full-width').innerHTML +=
            '<div class="hex" style =' + x + ')></div>';
    }
}

function lowerRow() {
    let offset = ["top:64.8%;left:58.5%;", "top:64.8%;left:41.5%;", "top:64.8%;left:24.5%;", "top:64.8%;left:75.5%;",]
    for (let x of offset) {
        console.log(x);
        document.getElementById('full-width').innerHTML +=
            '<div class="hex" style =' + x + ')></div>';
    }
}

function thebottom() {
    let offset = ["top:79.6%;left:33%;", "top:79.6%;left:67%;", "top:79.6%;"]
    for (let x of offset) {
        console.log(x);
        document.getElementById('full-width').innerHTML +=
            '<div class="hex" style =' + x + ')></div>';
    }
}

function thetop() {
    let offset = ["top:20.4%;left:33%;", "top:20.4%;left:67%;", "top:20.4%;"]
    for (let x of offset) {
        console.log(x);
        document.getElementById('full-width').innerHTML +=
            '<div class="hex" style =' + x + ')></div>';
    }
}
