function findBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    // BMI = weight (kg) / height (m)^2
    var bmi = weight / (height * height/10000);
    window.location.href = "dashboard.html#about";
    alert("Your BMI is: " + bmi);
    }

// function giveBMI(bmi) {
//     if (bmi <= 18.5){
//         document.getElementById("plan1").innerHTML = "In recent years, more than half of Canadian women aged 18 or older were overweight or obese, compared with two-thirds of men: an estimated 7.1 million women and 8.6 million men in 2008.";
//         document.getElementById("plan2").innerHTML = "In recent years, more than half of Canadian women aged 18 or older were overweight or obese, compared with two-thirds of men: an estimated 7.1 million women and 8.6 million men in 2008.";
//     } else if (bmi < 25) {
//         document.getElementById("plan1").innerHTML = "Fit";
//         document.getElementById("plan2").innerHTML = "Pasta";
//     } else {
//         document.getElementById("plan1").innerHTML = "Cut";
//         document.getElementById("plan2").innerHTML = "Cut 2";
//     } 
// }




