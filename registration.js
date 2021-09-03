$(document).ready(function() {
    hideResponsive();
});

function hideResponsive() {
    $(window).resize(function() {
        if ($(this).width() > 800) {
            $('.responsive-navbar').css('display', 'none');
        }
    });
}

function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gender = document.querySelector('input[name = "gender"]:checked');
    let address = $("#address").val();
    let city = document.getElementById("city").value;

    let agreement = document.querySelector('input[name = "agreement"]:checked');
    // let errorLabel = document.getElementById("errorLabel");
    let errorName = document.getElementById("errorName");
    let errorEmail = document.getElementById("errorEmail");
    let errorGender = document.getElementById("errorGender");
    let errorAddress = document.getElementById("errorAddress");
    let errorCity = document.getElementById("errorCity");
    let errorAgreement = document.getElementById("errorAgreement");


    checkName(name, errorName);
    checkEmail(email, errorEmail);
    checkGender(gender, errorGender);
    checkAddress(address, errorAddress);
    checkCity(city, errorCity);
    checkAgreement(agreement, errorAgreement);

    if (errorName.innerHTML == "" &&
        errorEmail.innerHTML == "" &&
        errorGender.innerHTML == "" &&
        errorAddress.innerHTML == "" &&
        errorCity.innerHTML == "" &&
        errorAgreement.innerHTML == "") {
        gender = gender.value;
        console.log("Membership Registration Success!\n" +
            "Information: \n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Gender: " + gender + "\n" +
            "Address: " + address + "\n" +
            "City: " + city + "\n");
        alert("Hello " + name + ". Thank you for Register at Zunder Zufflin!");
        window.location.href = "index.html";
    }

}

function resetLabelError(errorName, errorEmail, errorGender, errorAddress, errorCity, errorAgreement) {
    errorName.innerHTML = "";
    errorEmail.innerHTML = "";
    errorGender.innerHTML = "";
    errorAddress.innerHTML = "";
    errorCity.innerHTML = "";
    errorAgreement.innerHTML = "";

}

function isAlphabetName(name) {
    for (let i = 0; i < name.length; i++) {
        if (!(((name.charAt(i) >= 'a' && name.charAt(i) <= 'z') || (name.charAt(i) >= 'A' && name.charAt(i) <= 'Z')) || name.charAt(i) === ' ')) {
            return false;
        }
    }
    return true;
}

function isEmailValid(email) {
    let atSymbol = email.indexOf("@");
    if (atSymbol < 1) return false;
    // let dot = email.indexOf(".");
    // if (dot <= atSymbol + 2) return false;

    // if (dot === email.length - 1) return false;
    return true;
}

function checkName(name, errorName) {
    errorName.innerHTML = "";

    if (name === "") {
        errorName.innerHTML = "Please enter your name"
    } else if (isAlphabetName(name) == false) {
        errorName.innerHTML = "Name must only consist of alphabet"
    }

}

function checkEmail(email, errorEmail) {
    errorEmail.innerHTML = "";

    if (email === "") {
        errorEmail.innerHTML = "Please enter your email"
    } else if (isEmailValid(email) == false) {
        errorEmail.innerHTML = "Email is invalid!"
    }

}

function checkGender(gender, errorGender) {
    errorGender.innerHTML = "";
    if (gender === null) {
        errorGender.innerHTML = "Please select your gender"
    }
}

function checkAddress(address, errorAddress) {

    errorAddress.innerHTML = "";

    if (address === "") {
        errorAddress.innerHTML = "Please enter your address"
    }


}

function checkCity(city, errorCity) {

    errorCity.innerHTML = "";

    if (city === "") {
        errorCity.innerHTML = "Select your city"
    }

}

function checkAgreement(agreement, errorAgreement) {
    errorAgreement.innerHTML = "";

    if (agreement === null) {
        errorAgreement.innerHTML = "Please agree to our terms and service"
    }
}