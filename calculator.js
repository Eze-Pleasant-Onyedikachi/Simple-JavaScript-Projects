let num1 = 20
let num2 = 15
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let resultEl = document.getElementById("result-el")
// Create four functions: add(), subtract(), divide(), multiply()
function add() {
    let result = num1 + num2
    resultEl.textContent = "Result: " + result
}
function subtract() {
    let result = num1 - num2
    resultEl.textContent = "Result: " + result
}
function divide() {
    let result = num1 / num2
    resultEl.textContent = "Result: " + result
}
function multiply() {
    let result = num1 * num2
    resultEl.textContent = "Result: " + result
}
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="result-el"

// e.g if the user clicks on the "Plus" button, you should render 
// "Sum: 10" (since 8 +2 = 10) inside the paragraph with id = "result-el"