function findBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
        // BMI = weight (kg) / height (m)^2
        var bmi = weight / (height * height/10000);
        window.location.href = "dashboard.html#about";
        alert("Your BMI is: " + bmi);

    }

function returnBMI(){
    return bmi;
}
