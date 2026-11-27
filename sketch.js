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
let bearLady;
let buff;
let buffLady;
let dogLady;
let hatLady;
let potionLady;
let rabbitLady;
let strangeLady;
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
  bearLady = await loadImage('/assets/bearLady.png');
  bearLady.resize(250,250);
  buffLady = await loadImage('/assets/buffLady.png');
  buffLady.resize(350,250);
  dogLady = await loadImage('/assets/dogLady.png');
  dogLady.resize(250,250);
  hatLady = await loadImage('/assets/hatLady.png');
  hatLady.resize(250,250);
  potionLady = await loadImage('/assets/potionLady.png');
  potionLady.resize(250,250);
  rabbitLady = await loadImage('/assets/rabbitLady.png');
  rabbitLady.resize(300,375);
  strangeLady = await loadImage('/assets/strangeLady.png');
  strangeLady.resize(220,250);
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
  buff = new Customer(buffLady);

  customerImages = [
    bearLady,
    buffLady,
    dogLady,
    hatLady,
    potionLady,
    rabbitLady,
    strangeLady
  ];
  newCustomer();
  
  
}
  
function draw() {
  imageMode(CORNER);
  image(cafe,0,0);
  if(customer){
    customer.motion();
    if(customer.potionCompleted){
      newCustomer();
    }
  }
  imageMode(CORNER);
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
}