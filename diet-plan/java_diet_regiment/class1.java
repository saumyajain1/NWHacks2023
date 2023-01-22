import java.util.ArrayList;
public class class1 {
    ArrayList<Person> listOfPerson;
    ArrayList<Meal> listOfMeal;

    public void addPerson(Person person){
        listOfPerson.add(person);
    }
    public void addMeal(Meal meal){
        listOfMeal.add(meal);
    }

    public void setListOfMeal(ArrayList<Meal> listOfMeal) {
        this.listOfMeal = listOfMeal;
    }

    //filter listOfMeal according to requirements of given person
    //
    public ArrayList<Meal> generateMealSuggestions(Person person) {
        ArrayList<Meal> mealsSuggestions = new ArrayList<>();
        if(person.bmi<20) {
            mealsSuggestions = getBulkMeals();
        } else if (person.bmi < 30) {
            mealsSuggestions = getMaintenanceMeals();
        } else {
            mealsSuggestions = getCutMeals();
        }
        return mealsSuggestions;
    }

    private ArrayList<Meal> getCutMeals() {

        ArrayList<Meal> meals = new ArrayList<>();
        for (int i=0; i<listOfMeal.size(); i++) {
            Meal meal=listOfMeal.get(i);
            if (meal.getCaloriesLevel() == 1) {
                meals.add(meal);
            }
        }
        return meals;
    }

    private ArrayList<Meal> getBulkMeals() {
        ArrayList<Meal> meals = new ArrayList<>();
        for (int i=0; i<listOfMeal.size(); i++) {
            Meal meal=listOfMeal.get(i);
            if (meal.getCaloriesLevel() == 3) {
                meals.add(meal);
            }
        }
        return meals;
    }

    private ArrayList<Meal> getMaintenanceMeals() {
        ArrayList<Meal> meals = new ArrayList<>();
        for (int i=0; i<listOfMeal.size(); i++) {
            Meal meal=listOfMeal.get(i);
            if (meal.getCaloriesLevel() == 2) {
                meals.add(meal);
            }
        }
        return meals;
    }

    public void setAllMeals() {

        Ingredient ingredient1 = new Ingredient("Onion", 0.2, 10);
        Ingredient ingredient2 = new Ingredient("Garlic", 1, 5);
        Ingredient ingredient3 = new Ingredient("Chicken", 25, 150);
        Ingredient ingredient4 = new Ingredient("Milk", 2.5, 25);
        Ingredient ingredient5 = new Ingredient("Rice", 2, 100);
        Ingredient ingredient6 = new Ingredient("Tomato", 0.5, 10);
        Ingredient ingredient7 = new Ingredient("Peanut Butter", 7, 150);

        Ingredient ingredient8 = new Ingredient("Pasta", 7, 130);
        Ingredient ingredient9 = new Ingredient("Ranch", 0, 40);
        Ingredient ingredient10 = new Ingredient("Celery", 0, 15);

        Ingredient ingredient11 = new Ingredient("Paneer", 8, 90);
        Ingredient ingredient12 = new Ingredient("Spices", 0.2, 2);

        Ingredient ingredient13 = new Ingredient("Bread", 2, 150);
        Ingredient ingredient14 = new Ingredient("Corn", 0.6, 20);
        Ingredient ingredient15 = new Ingredient("Parmesan Cheese", 4, 40);


        ArrayList<Ingredient> ingredients = new ArrayList<>();

        ingredients.add(ingredient1);
        ingredients.add(ingredient2);
        ingredients.add(ingredient3);
        ingredients.add(ingredient4);
        ingredients.add(ingredient5);
        ingredients.add(ingredient6);
        ingredients.add(ingredient7);
        ingredients.add(ingredient12);

        Meal meal1 = new Meal("Peanut Butter Chicken Curry", ingredients);//bulk

//        System.out.println(meal1.getCaloriesLevel());
//        System.out.println(meal1.getProteinLevel());

        ingredients = new ArrayList<>();
        ingredients.add(ingredient3);
        ingredients.add(ingredient6);
        ingredients.add(ingredient8);
        ingredients.add(ingredient9);
        ingredients.add(ingredient10);
        ingredients.add(ingredient12);

        Meal meal2 = new Meal("Chicken Pasta Salad", ingredients);//cut
//        System.out.println(meal2.getCaloriesLevel());
//        System.out.println(meal2.getProteinLevel());

        ingredients = new ArrayList<>();

        ingredients.add(ingredient1);
        ingredients.add(ingredient2);
        ingredients.add(ingredient4);
        ingredients.add(ingredient5);
        ingredients.add(ingredient6);
        ingredients.add(ingredient11);
        ingredients.add(ingredient12);

        Meal meal3 = new Meal("Shahee Paneer and Rice", ingredients);
//        System.out.println(meal3.getCaloriesLevel());
//        System.out.println(meal3.getProteinLevel());

        ingredients = new ArrayList<>();

        ingredients.add(ingredient1);
        ingredients.add(ingredient2);
        ingredients.add(ingredient6);
        ingredients.add(ingredient9);
        ingredients.add(ingredient11);
        ingredients.add(ingredient13);
        ingredients.add(ingredient14);
        ingredients.add(ingredient15);

        Meal meal4 = new Meal("Paneer Sandwich", ingredients);
//        System.out.println(meal1.getCaloriesLevel());
//        System.out.println(meal1.getProteinLevel());

        addMeal(meal1);
        addMeal(meal2);
        addMeal(meal3);
        addMeal(meal4);
    }

    private int correctCombination(Person newPerson) {
        for (int i=0; i<listOfPerson.size(); i++) {
            Person person=listOfPerson.get(i);
            if (person.username.equals(newPerson.username) && person.password.equals(newPerson.password))
                return i;
        }
        return -1;
    }
}
