console.log(meal1);
class MealManager {


    constructor() {
      this.listOfMeal = [];
    }

    addMeal(meal) {
      this.listOfMeal.add(meal);
    }

    generateMealSuggestions(bmi) {
      let mealSuggestions = [];
      if (bmi < 20) {
        mealSuggestions = this.getBulkMeals();
      } else {
        if (bmi < 30) {
          mealSuggestions = this.getMaintenanceMeals();
        } else {
          mealSuggestions = this.getCutMeals();
        }
      }
      return mealSuggestions.toString;
    }
    
    getCutMeals() {
      let meals = [];
      for (let i = 0; i < this.listOfMeal.size(); i++) {
        let meal = this.listOfMeal.get(i);
        if (meal.getCaloriesLevel() === 1) {
          meals.add(meal);
        }
      }
      return meals;
    }
    getBulkMeals() {
      let meals = [];
      for (let i = 0; i < this.listOfMeal.size(); i++) {
        let meal = this.listOfMeal.get(i);
        if (meal.getCaloriesLevel() === 3) {
          meals.add(meal);
        }
      }
      return meals;
    }
    getMaintenanceMeals() {
      let meals = [];
      for (let i = 0; i < this.listOfMeal.size(); i++) {
        let meal = this.listOfMeal.get(i);
        if (meal.getCaloriesLevel() === 2) {
          meals.add(meal);
        }
      }
      return meals;
    }
    setAllMeals() {
      let ingredient1 = new Ingredient('Onion', 0.2, 10);
      let ingredient2 = new Ingredient('Garlic', 1, 5);
      let ingredient3 = new Ingredient('Chicken', 25, 150);
      let ingredient4 = new Ingredient('Milk', 2.5, 25);
      let ingredient5 = new Ingredient('Rice', 2, 100);
      let ingredient6 = new Ingredient('Tomato', 0.5, 10);
      let ingredient7 = new Ingredient('Peanut Butter', 7, 150);
      let ingredient8 = new Ingredient('Pasta', 7, 130);
      let ingredient9 = new Ingredient('Ranch', 0, 40);
      let ingredient10 = new Ingredient('Celery', 0, 15);
      let ingredient11 = new Ingredient('Paneer', 8, 90);
      let ingredient12 = new Ingredient('Spices', 0.2, 2);
      let ingredient13 = new Ingredient('Bread', 2, 150);
      let ingredient14 = new Ingredient('Corn', 0.6, 20);
      let ingredient15 = new Ingredient('Parmesan Cheese', 4, 40);
      let ingredients = [];
      ingredients.add(ingredient1);
      ingredients.add(ingredient2);
      ingredients.add(ingredient3);
      ingredients.add(ingredient4);
      ingredients.add(ingredient5);
      ingredients.add(ingredient6);
      ingredients.add(ingredient7);
      ingredients.add(ingredient12);
      let meal1 = new Meal('Peanut Butter Chicken Curry', ingredients);
      ingredients = [];
      ingredients.add(ingredient3);
      ingredients.add(ingredient6);
      ingredients.add(ingredient8);
      ingredients.add(ingredient9);
      ingredients.add(ingredient10);
      ingredients.add(ingredient12);
      let meal2 = new Meal('Chicken Pasta Salad', ingredients);
      ingredients = [];
      ingredients.add(ingredient1);
      ingredients.add(ingredient2);
      ingredients.add(ingredient4);
      ingredients.add(ingredient5);
      ingredients.add(ingredient6);
      ingredients.add(ingredient11);
      ingredients.add(ingredient12);
      let meal3 = new Meal('Shahee Paneer and Rice', ingredients);
      ingredients = new ArrayList();
      ingredients.add(ingredient1);
      ingredients.add(ingredient2);
      ingredients.add(ingredient6);
      ingredients.add(ingredient9);
      ingredients.add(ingredient11);
      ingredients.add(ingredient13);
      ingredients.add(ingredient14);
      ingredients.add(ingredient15);
      let meal4 = new Meal('Paneer Sandwich', ingredients);
      this.addMeal(meal1);
      this.addMeal(meal2);
      this.addMeal(meal3);
      this.addMeal(meal4);
    }
    
    
  }