let currentURL = new URL(window.location.href);

let searchParams = new URLSearchParams(currentURL.search)

let fname = searchParams.get("fname");
let lname = searchParams.get("lname");
let email = searchParams.get("email");
let birthdate = searchParams.get("birthdate");
let csharp = searchParams.get("csharp");
let js = searchParams.get("js");
let skanska = searchParams.get("skanska");

let inCage = searchParams.get("inCage");

document.getElementById("fullName").innerHTML = "Welcome, " + fname + " " + lname + "!";

let pString = "Email: " + email + "<br>" + "Born: " + birthdate + "<br>";

let languages = [];
if (csharp == "on") {
    languages.push("C#")
}
if (js == "on") {
    languages.push("JS")
}
if (skanska == "on") {
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

pString += document.getElementById("p1").innerHTML = pString;
