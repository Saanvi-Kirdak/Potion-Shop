let cafe;
let counter;
let goo;
let saf;
let mint;
let lizzard;
let eyes;
let sugar;
let blood;
let water;
let cin;
let cinArea;
let gooArea;
let safArea;
let mintArea;
let lizzardArea;
let eyesArea;
let sugarArea;
let bloodArea;
let waterArea;

// asset images & sizing (if you mess with the sizing too much it will look fuzzy
//instead of pixely)
//also dragging is only accurate for goo idk how to fix that 

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
  mint = await loadImage('/assets/mint.png');
  mint.resize(400,400);
  lizzard = await loadImage('/assets/lizzard.png');
  lizzard.resize(400,400);
  eyes = await loadImage('/assets/eye.png');
  eyes.resize(400,400);
  sugar = await loadImage('/assets/sugar.png');
  sugar.resize(400,400);
  blood = await loadImage('/assets/blood.png');
  blood.resize(400,400);
  water = await loadImage('/assets/water.png');
  water.resize(400,400);
  cin = await loadImage('/assets/cinamon.png');
  cin.resize(400,400);
  waterArea = new Ingredient(water, 25, 325);
  bloodArea = new Ingredient(blood, 80, 325);
  sugarArea = new Ingredient(sugar, 375, 310);
  eyesArea = new Ingredient(eyes, 125, 310);
  mintArea = new Ingredient(mint, 450, 225);
  gooArea = new Ingredient(goo, 470, 275);
  safArea = new Ingredient(saf, 470, 325);
  lizzardArea = new Ingredient(lizzard, 250, 275);
  cinArea = new Ingredient(cin, 425, 325);
  
}
  
function draw() {
  imageMode(CORNER);
  image(cafe,0,0);
  image(counter,0,0);
  gooArea.show();
  safArea.show();
  mintArea.show();
  lizzardArea.show();
  eyesArea.show();
  sugarArea.show();
  bloodArea.show();
  waterArea.show();
  cinArea.show();
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
