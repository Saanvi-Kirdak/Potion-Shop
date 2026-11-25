let gooX = 0;
let gooY = 0;

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
