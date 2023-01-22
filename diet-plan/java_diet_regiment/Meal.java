import java.util.ArrayList;

class Meal {
    String name;
    double protein, calories;
    int proteinLevel, caloriesLevel;//1=low, 2=med, 3=high

    ArrayList<Ingredient> ingredientList;
    Meal(String mealName,  ArrayList<Ingredient> ListOfIngredient) {

        this.name = mealName;
        this.ingredientList = ListOfIngredient;

        protein = 0.0;
        calories = 0.0;

        setStats();
    }
    void setStats() {

        for(int i=0; i<ingredientList.size(); i++) {
            protein = protein+ ingredientList.get(i).getProtein();
            calories = calories+ ingredientList.get(i).getCalories();
        }

        if (protein<10)
            proteinLevel = 1;
        else if (protein < 35)
            proteinLevel = 2;
        else
            proteinLevel = 3;

        if (calories<250)
            caloriesLevel = 1;
        else if (calories < 450)
            caloriesLevel = 2;
        else
            caloriesLevel = 3;
    }

    public int getCaloriesLevel() {
        return caloriesLevel;
    }

    public int getProteinLevel() {
        return proteinLevel;
    }
}
