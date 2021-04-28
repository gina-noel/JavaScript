// variables
var name;
var firstNumber;
var secondNumber;
var numberTotals;

// get user input from prompts
name = prompt("Let's play the sum game.\nPlease enter your name");
firstNumber = parseInt(prompt("Enter first number"));
secondNumber = parseInt(prompt("Enter second number"));

// call function
displayUserInputs(name, firstNumber, secondNumber);

//function
function displayUserInputs(name, firstNumber, secondNumber) {
    if (name !== "" && name !== "null" && !isNaN(firstNumber) && !isNaN(secondNumber)) {
        numberTotals = firstNumber + secondNumber;
        document.getElementById("result").textContent =
            "Hi " + name + "! " + "The sum of " +
            firstNumber + " + " +
            secondNumber + " is : " +
            numberTotals;
    } else {
        document.getElementById("result").textContent = "Oops, your input was not received properly. Please start over!";
    }
}

