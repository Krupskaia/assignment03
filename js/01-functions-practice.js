/* eslint-env browser */
/*
Practice with Functions (5 points)
1.	Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".
2.	Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
3.	Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."
4.	Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."
5.	Create a JavaScript function that accepts a certain amount of numbers as parameters. Those numbers should be collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type conversion global functions to accomplish this task.
*/


//STEP 1

/*function halfNumber(number) {
    "use strict";
    var result;
    result = number / 2;
    return result;
}

var number = 5;
var result = halfNumber(number);

window.console.log("Half of " + number + " is " + result + ".");*/


//STEP 2

/*function squareNumber(number) {
    "use strict";
    var result;
    result = number * number;
    return result;
}

var number = 5;
var result = squareNumber(number);

window.console.log("The result of squaring the number " + number + " is " + result + ".");*/

//STEP 3
/*function percentOf(number1, number2) {
    "use strict";
    var result;
    result = number1 * 100 / number2;
    return result;
}

var number1 = 20;
var number2 = 200;
var result = percentOf(number1, number2);

window.console.log(number1 + " is " + result + "% of " + number2 + ".");*/


//STEP 4

/*function findModulus(number1, number2) {
    "use strict";
    var result;
    result = number1 % number2;
    return result;
}

var number1 = 10;
var number2 = 4;
var result = findModulus(number1, number2);

window.console.log(result+ " is the modulus of  " + number1 + " and " + number2 + ".");*/


//STEP 5

function sumAll(strNumbers) {
    "use strict";
    var i, k, len, number, total;
    total = 0;
    number = 0;
    i = 0;
    len = strNumbers.length;
    do {
        k = strNumbers.indexOf(",", i);
        window.console.log(k);
        if (k !== -1) {
            number = parseInt(strNumbers.substring(i, k));
            window.console.log(number);
        } else {
            number = parseInt(strNumbers.substring(i, len));
            window.console.log(number);
        }
        total = total + parseInt(number);
        i = k + 1;
    } while (k !== -1);
    return total;
}

var strNumbers = window.prompt("Enter numbers separated by commas");
var total = sumAll(strNumbers);

window.document.write("The sum of :" + strNumbers + " is " + total + ".");



