

class Ingredient{
    constructor(img,x,y){
        this.img = img;
        this.x = x;
        this.y = y;

        this.boxX = x;
        this.boxY = y;
        this.isDragging = false;
    }
show(){
    if(this.isDragging){
    imageMode(CENTER);
    image(this.img, this.x, this.y);
}
}

clicked(){
    if(dist(mouseX, mouseY, this.boxX, this.boxY) <= 30){
        this.isDragging = true;
    }
}
dragged(){
    if(this.isDragging){
        this.x = mouseX - 60;
        this.y = mouseY - 10;
    }
}

release(){
    this.isDragging = false;

    this.x = this.boxX;
    this.y = this.boxY;
}

}

function mousePressed(){
    gooArea.clicked();
    safArea.clicked();
    mintArea.clicked();
    lizzardArea.clicked();
    eyesArea.clicked();
    sugarArea.clicked();
    bloodArea.clicked();
    waterArea.clicked();
}

function mouseDragged(){
    gooArea.dragged();
    safArea.dragged();
    mintArea.dragged();
    lizzardArea.dragged();
    eyesArea.dragged();
    sugarArea.dragged();
    bloodArea.dragged();
    waterArea.dragged();
}

function mouseReleased(){
    gooArea.release();
    safArea.release();
    mintArea.release();
    lizzardArea.release();
    eyesArea.release();
    sugarArea.release();
    bloodArea.release();
    waterArea.release();
}
