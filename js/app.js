// LEVEL ONE

let users = [
    {
        username: "admin",
        password: "pass"
    },
    {
        username: "person",
        password: "strongpass1"
    },
    {
        username: "coolperson",
        password: "weakpass"
    }
];

function loginUser() {
    // Create variables for what the user has typed in
    let usernameInput = document.getElementById("username-input").value;
    let passwordInput = document.getElementById("password-input").value;

    // LOOP through each user in our array
    for(let i=0; i<users.length; i++) {
        // Check if and username and password match the input typed in
        if(users[i].username == usernameInput && users[i].password == passwordInput) {
            // If there is a match, set the login message to success and return from the function
            // The return stops the function
            document.getElementById("login-message").innerHTML = "SUCCESS!";
            document.getElementById("login-message").style.color = "green";
            return;
        }
    }

    // If we get to this line, that means there was never a valid match
    // The function would have hit the return and never gotten here so we can assume the login was invalid
    document.getElementById("login-message").innerHTML = "INVALID LOGIN!"
    document.getElementById("login-message").style.color = "red";
}

// Create an event listener to listen for clicks on the submit button and attempt the login function
document.getElementById("login-submit").addEventListener("click", loginUser);