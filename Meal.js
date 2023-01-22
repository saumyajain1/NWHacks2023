class Meal {
    constructor(mealName, ListOfIngredient) {
      this.name = null;
      this.protein = 0;
      this.calories = 0;
      this.proteinLevel = 0;
      this.caloriesLevel = 0;
      this.ingredientList = [];
  
      this.name = mealName;
      this.ingredientList = ListOfIngredient;
      this.protein = 0.0;
      this.calories = 0.0;
      this.setStats();
    }
    setStats() {
      for (let i = 0; i < this.ingredientList.size(); i++) {
        this.protein = this.protein + this.ingredientList.get(i).getProtein();
        this.calories = this.calories + this.ingredientList.get(i).getCalories();
      }
      if (this.protein < 10) {
        this.proteinLevel = 1;
      } else {
        if (this.protein < 35) {
          this.proteinLevel = 2;
        } else {
          this.proteinLevel = 3;
        }
      }
      if (this.calories < 250) {
        this.caloriesLevel = 1;
      } else {
        if (this.calories < 450) {
          this.caloriesLevel = 2;
        } else {
          this.caloriesLevel = 3;
        }
      }
    }
    getCaloriesLevel() {
      return this.caloriesLevel;
    }
    getProteinLevel() {
      return this.proteinLevel;
    }
  }
  