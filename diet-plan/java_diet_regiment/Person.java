public class Person {
    String username, password;
    double weight, height, bmi;
    String goal;

    public Person(String user, String pass) {
        username = user;
        password = pass;
        weight = 0.0;
        height = 0.0;
        bmi = 0.0;
        goal = "";
    }
    public void setProfile(double w, double h, String g) {
        weight = w;
        height = h;
        bmi = w/(h*h);
        goal = g;
    }
}
