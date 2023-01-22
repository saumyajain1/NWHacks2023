class Ingredient {
    constructor(ingredientName, proteinContent, caloriesContent) {
      this.name = null;
      this.protein = 0;
      this.calories = 0;
  
      this.name = ingredientName;
      this.protein = proteinContent;
      this.calories = caloriesContent;
    }

    getProtein() {
      return this.protein;
    }

    getCalories() {
      return this.calories;
    }
  }