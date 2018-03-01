/* eslint-env browser */
//The Basic Calculator (20 points)

function calculate(num1, num2, operation) {
    "use strict";
    var result = 0;
    switch (operation) {
    case "add":
        result = num1 + num2;
        break;
    case "substract":
        result = num1 - num2;
        break;
    case "multiply":
        result = num1 * num2;
        break;
    case "divide":
        result = num1 / num2;
        break;
    default:
        result = null;
    }
    if (result !== null) {
        window.alert("The " + operation + " of " + num1 + " and " + num2 + " is " + result);
    } else {
        operation = window.prompt("Please enter add, substract, multiply, or divide");
        calculate(num1, num2, operation);
    }
}

var num1 = Number(window.prompt("Please enter the first number"));
var num2 = Number(window.prompt("Please enter the second number"));
var operation = window.prompt("Please enter add, substract, multiply, or divide");
window.console.log(operation);
calculate(num1, num2, operation);