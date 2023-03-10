function showPass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function checkInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Fetch the JSON file containing the valid credentials
    fetch('./credentials.json')
        .then(function(response) {
             return response.json();
            })

        .then(function(data){
            // Checks if the entered username and password match a valid set of credentials
            var valid = false;
            data.forEach(function(cred){
                if (cred.username == username && cred.password == password) {
                    valid = true;
                }
            });

            if (valid) {
                // Redirect the user to the dashboard page
                window.location.href = "dashboard/dashboard.html";
            } else {
                // Display an error message
                // document.getElementById("error-message").innerHTML = "Incorrect username or password. Please try again.";
                alert("Wrong credentials. Please try again.");
            }
        })
        
        .catch(error => {
            console.log("Error fetching JSON file: ", error);
        });
}
