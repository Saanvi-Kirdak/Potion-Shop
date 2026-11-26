let gooX = 0;
let gooY = 0;

//im sure there's an easier way to do this

let gooBox = {
    gooMinX: 450,
    gooMaxX: 500,
    gooMinY: 250,
    gooMaxY: 300,
}

let saffronBox = {
    safMinX: 450,
    safMaxX: 500,
    safMinY: 
}

function gooShow(){
    if(mouseIsPressed){
    imageMode(CENTER);
    image(goo, gooX, gooY);
}
}

function mouseDragged() {
    imageMode(CENTER);
        image(goo, gooX, gooY);
        gooX = mouseX - 60;
        gooY = mouseY - 10;
}
