let cafe;
let counter;
let goo;
let saf;
let gooArea;
let safArea;
// asset images & sizing (if you mess with the sizing too much it will look fuzzy
//instead of pixely)
async function setup() {
  createCanvas(500, 400);
  cafe = await loadImage('/assets/realcafe.jpg');
  cafe.resize(500,400);
  counter = await loadImage('/assets/realCounter.png');
  counter.resize(500,400);
  goo = await loadImage('/assets/realGoo.png');
  goo.resize(400,400);
  saf = await loadImage('/assets/saffron.png');
  saf.resize(400,400);
  
  gooArea = new Ingredient(goo, 470, 275);
  safArea = new Ingredient(saf, 470, 325);
  
}
  
function draw() {
  imageMode(CORNER);
  image(cafe,0,0);
  image(counter,0,0);
  gooArea.show();
  safArea.show();
// test grid
  const cube = 50
const columns = Math.floor(width / cube);
const rows = Math.floor(height / cube);

for (let row = 0; row < rows; row++){
    for (let col = 0; col < columns; col++){
        stroke(200);
        line(col * cube, 0, col * cube, height);
        line(0, row * cube, width, row * cube);
    }
}

}
