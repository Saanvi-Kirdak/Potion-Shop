let cafe;

async function setup() {
  createCanvas(500, 400);
  cafe = await loadImage('/assets/realcafe.jpg');
  cafe.resize(500,400);
}
  
function draw() {
  image(cafe,0,0);

}
