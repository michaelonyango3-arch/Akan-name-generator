// Akan names based on the day of the week

const maleNames = [
    "Kwasi",   // Sunday
    "Kwadwo",  // Monday
    "Kwabena", // Tuesday
    "Kwaku",   // Wednesday
    "Yaw",     // Thursday
    "Kofi",    // Friday
    "Kwame"    // Saturday
]

const femaleNames = [
    "Akosua",  // Sunday
    "Adwoa",   // Monday
    "Abenaa",  // Tuesday
    "Akua",    // Wednesday
    "Yaa",     // Thursday
    "Afua",    // Friday
    "Ama"      // Saturday
];
// Form submit event

document.getElementById("akanform").addEventListener("submit",) function (event) {
    event.preventDefault();} // stop the page from refreshing

     // Get user input
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validation
    if (!birthdate || !gender) {
        alert("Please enter your birthdate and select a gender.");
        return;
    }
