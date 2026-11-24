let cafe;
let counter;
let goo;
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
  
}
  
function draw() {
  imageMode(CORNER);
  image(cafe,0,0);
  image(counter,0,0);
  imageMode(CENTER);
  image(goo,250,200);
}
