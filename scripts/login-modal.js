window.onload = function () {
// Get the modal
    var login = document.getElementById('login-modal');
    var disclaimer = document.getElementById('disclaimer-modal');
    var policy = document.getElementById('policy-modal');

// Get the button that opens the modal
    var loginbtn = document.getElementById("login-link");
    var disclaimerbtn = document.getElementById("disclaimer-link");
    var policybtn = document.getElementById("policy-link");

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var span1 = document.getElementsByClassName("close")[1];
    var span2 = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the login
    loginbtn.onclick = function () {
        login.style.display = "block";
    };

    disclaimerbtn.onclick = function () {
        disclaimer.style.display = "block";
    };

    policybtn.onclick = function () {
        policy.style.display = "block";
    };

// When the user clicks on <span> (x), close the login
    span.onclick = function () {
        login.style.display = "none";
    };
    span1.onclick = function () {
        disclaimer.style.display = "none";
    };
    span2.onclick = function () {
        policy.style.display = "none";
    };

// When the user clicks anywhere outside of the login, close it
    window.onclick = function (event) {
        if (event.target === login) {
            login.style.display = "none";
        }
        if (event.target === disclaimer) {
            disclaimer.style.display = "none";
        }
        if (event.target === policy) {
            policy.style.display = "none";
        }
    }
};