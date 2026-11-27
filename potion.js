class Potion {
  ingredients = [];
  name;

  constructor(ingredients) {
      this.ingredients = ingredients;
      this.determineName();
  }

    determineName() {
      console.log("determineName, ingredients: " + ingredients)
      if(ingredients.includes("water") 
        && ingredients.includes("brown sugar") 
        && ingredients.includes("saffron") 
        && ingredients.includes("mint")) {
          this.name = "Sleep Potion";
      } else if(ingredients.includes("eyes")
        && ingredients.includes("blood") 
        && ingredients.includes("goo") 
        && ingredients.includes("lizard")) {
          this.name = "Death Potion";
      } else if(ingredients.includes("blood") 
        && ingredients.includes("brown sugar") 
        && ingredients.includes("cinnamon") 
        && ingredients.includes("saffron")) {
          this.name = "Love Potion";
      } else if(ingredients.includes("saffron") 
        && ingredients.includes("cinnamon") 
        && ingredients.includes("blood") 
        && this.ingredients.includes("goo")) {
          this.name = "Transformation Potion";
      } else if(ingredients.includes("mint") 
        && ingredients.includes("water") 
        && ingredients.includes("goo")) {
          this.name = "Health Potion";
      } else if(ingredients.includes("water") 
        && ingredients.includes("goo") 
        && ingredients.includes("lizard")) {
          this.name = "Invisibility Potion";
      } else if(ingredients.includes("water") 
        && ingredients.includes("mint")) {
          this.name = "Holy Water";
      } else {
          this.name = "Not a Potion";
      }

  }
}
