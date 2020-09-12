// LEVEL TWO

// Get the cookie that was set in the login page
let loggedInUser = Cookies.get("username");

// Check to see if there is anything in that cookie
if(loggedInUser == undefined) {
    document.getElementById("welcome-message").innerHTML = "No user is logged in!";
} else {
    document.getElementById("welcome-message").innerHTML = "Welcome " + loggedInUser;
}