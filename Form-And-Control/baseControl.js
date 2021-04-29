let currentURL = new URL(window.location.href);

let searchParams = new URLSearchParams(currentURL.search)

let fname = searchParams.get("fname");
let lname = searchParams.get("lname");
let email = searchParams.get("email");
let birthdate = searchParams.get("birthdate");
let cbcsharp = searchParams.get("cbcsharp");
let cbjs = searchParams.get("cbjs");
let cbskanska = searchParams.get("cbskanska");

let inCage = searchParams.get("inCage");

document.getElementById("fullName").innerHTML = "Welcome, " + fname + " " + lname + "!";

let pString = "Email: " + email + "<br>" + "Born: " + birthdate + "<br>";

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
if (inCage == "yes") {
    pString += "Status: Caged";
}
else {
    pString += "Status: Coder on the Run";
}

document.getElementById("p1").innerHTML = pString;