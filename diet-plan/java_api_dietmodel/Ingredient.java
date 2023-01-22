class Ingredient {
    String name;
    double protein, calories;

    Ingredient(String ingredientName, double proteinContent, double caloriesContent) {

        this.name = ingredientName;
        protein = proteinContent;
        calories = caloriesContent;
    }

    public double getProtein() {
        return protein;
    }

    public double getCalories() {
        return calories;
    }
}
