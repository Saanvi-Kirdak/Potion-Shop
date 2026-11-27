console.log("Starting test");
let mint = new Ingredient(
  "mint",
  45,
  60,
  "green"
);

let saffron = new Ingredient(
  "saffron",
  60,
  75,
  "yellow"
);

let water = new Ingredient(
  "water",
  10,
  5,
  "light blue"
);

let cinnamon = new Ingredient(
  "cinnamon",
  80,
  75,
  "orange"
);

let brown_sugar = new Ingredient(
  "brown sugar",
  50,
  30,
  "brown"
);

let eyes = new Ingredient(
  "eyes",
  50,
  65,
  "white"
);

let blood = new Ingredient(
  "blood",
  70,
  70,
  "red"
);

let goop = new Ingredient(
  "goop",
  75,
  55,
  "purple"
);

let lizard = new Ingredient(
  "lizard",
  50,
  50,
  "dark blue"
);

let sleep_potion = new Potion(
  ingredients = ["water", "brown sugar"]
);

let death_potion = new Potion(
  ingredients = ["eyes", "blood", "goo", "lizard"]
);

let health_potion = new Potion(
  ingredients = ["mint", "water", "goo"]
);

let love_potion = new Potion(
  ingredients = ["blood", "brown sugar", "cinnamon", "saffron"]
);

let holy_water = new Potion(
  ingredients = ["water", "mint"]
);

let invisibility_potion = new Potion(
  ingredients = ["water", "lizard", "goo"]
);

let transformation_potion = new Potion(
  ingredients = ["saffron", "cinnamon", "blood", "goo"]
);

let not_a_potion = new Potion(
  ingredients = ["dirt", "water"]
);

console.log(mint);
console.log(saffron);
console.log(water);
console.log(cinnamon);
console.log(brown_sugar);
console.log(eyes);
console.log(blood);
console.log(goop);
console.log(lizard);
console.log(sleep_potion);
console.log(death_potion);
console.log(health_potion);
console.log(love_potion);
console.log(holy_water);
console.log(invisibility_potion);
console.log(transformation_potion);
console.log(not_a_potion);
console.log("Test complete");