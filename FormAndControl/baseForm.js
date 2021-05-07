function checkValid() {
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let email = document.forms["myForm"]["email"].value;

    let birthdate = new Date(document.forms["myForm"]["birthdate"].value);
    let birthYear = birthdate.getFullYear();
    
    let today = new Date();
    let currentYear = today.getFullYear();

    let yearDiff = currentYear - birthYear;
    
    let lettersRegex = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!fname.match(lettersRegex)) {
        alert("Only letters in the first name!")
        return false;
    }
    if (!lname.match(lettersRegex)) {
        alert("Only letters in the last name!")
        return false;
    }
    if (!email.match(emailRegex)) {
        alert("Invalid Email!")
        return false;
    }
    if (yearDiff < 10) {
        alert("Maybe you should wait until you're a few years older!")
        return false;
    }
    if (yearDiff > 125) {
        alert("How are you alive?\nPlease check that your date of birth is correct!")
        return false;
    }

    return true;
}

/*
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
    myForm.
        e.preventDefault();

});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
*/