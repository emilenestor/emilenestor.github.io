let currentURL = new URL(window.location.href);

let searchParams = new URLSearchParams(currentURL.search)

let fname = searchParams.get("fname");
let lname = searchParams.get("lname");
let email = searchParams.get("email");
let birthdate = new Date(searchParams.get("birthdate"));


let inCage = searchParams.get("inCage");

document.getElementById("fullName").innerHTML = "Welcome, " + fname + " " + lname + "!";

let weekday = new Array();
weekday[0] = "Monday";
weekday[1] = "Tuesday";
weekday[2] = "Wednesday";
weekday[3] = "Thursday";
weekday[4] = "Friday";
weekday[5] = "Saturday";
weekday[6] = "Sunday";

let months = new Array();
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";

let pString = "Email: " + email + "<br>" +
    "Born: " + weekday[birthdate.getDay()] + ", " + months[birthdate.getMonth()] + " " + birthdate.getDate() + ", " + birthdate.getFullYear() + "<br>";

let cbcsharp = searchParams.get("cbcsharp");
let cbjs = searchParams.get("cbjs");
let cbskanska = searchParams.get("cbskanska");

let languages = [];
if (cbcsharp == "on") {
    languages.push("C#")
}
if (cbjs == "on") {
    languages.push("JS")
}
if (cbskanska == "on") {
    languages.push("Skånska")
}
if (languages.length > 0) {
    pString += "Proficient in: ";
}
for (let index = 0; index < languages.length; index++) {
    pString += languages[index];
    pString += index == languages.length - 1 ? ".<br>" : ", ";
}

/*DOESN'T WORK SINCE WE CAN'T ACCESS INPUT TYPE FROM URL IN SECOND PAGE*/
// let checkboxes = document.querySelectorAll("input[type='checkbox']");

// for (let i = 0; i < checkboxes.length; i++) {
//     pString += checkboxes[i];
//     pString += (i == languages.length - 1) ? ".<br>" : ", ";
// }

if (inCage == "yes") {
    pString += "Status: Caged";
}
else {
    pString += "Status: Coder on the Run";
}

document.getElementById("p1").innerHTML = pString;