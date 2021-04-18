/*
Project 1 by Gina Noel
Date: 4/15/2021
 */

// number variables for calculation
let numOne = 5;
let numTwo = 7;

// variable to hold the calculation total
let numTotals;

// welcome message variable
let welcomemsg = "Welcome to my calculator";

// calculation
numTotals = numOne + numTwo;

// display the welcome message and the calculation
document.getElementById('welcomemsg').textContent = welcomemsg;
let el = document.getElementById('calculation');
el.textContent = "The sum of " +
    numOne + " + " +
    numTwo + " is : " +
    numTotals;