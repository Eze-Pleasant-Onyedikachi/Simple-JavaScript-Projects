// The Logical AND Operator
let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true && givesCertificate ===true) {
    generateCertificate()
}
function generateCertificate() {
    console.log("Generating certificate....") 
}

let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}
// Create an if statement that checks that both variables are false
// If so, run the showSolution() function

function showSolution() {
    console.log("Showing the solution...")
}

// The OR Operator

// Create two boolean variables, likeDocumentaries and likesStartups
// Use an OR statement to call recommendMovie() if either of those varriables are true
let likeDocumentaries = true
let likesStartups = true
if (likeDocumentaries === true || likesStartups === true) {
    recommendMovie()
}
function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}