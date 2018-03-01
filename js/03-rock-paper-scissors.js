/* eslint-env browser */
//The Rock, Paper, Scissors Game (20 points)


function rockPaperScissors() {
    "use strict";
    var optionUser = window.prompt("Please enter rock or paper or scissors");
    var coinFlip = Math.random(), optionComputer;

    if (coinFlip <= 0.3) {
        optionComputer = "rock";
    } else if (coinFlip > 0.3 && coinFlip <= 0.7) {
        optionComputer = "paper";
    } else {
        optionComputer = "scissors";
    }
    if (optionUser === "rock" || optionUser === "scissors" || optionUser === "paper") {
        if (optionUser !== optionComputer) {
            if (optionUser === "rock") {
                if (optionComputer === "scissors") {
                    window.alert("Rock destroys scissors. User wins.");
                } else {
                    window.alert("Paper covers rock. Computer wins.");
                }
            } else if (optionUser === "scissors") {
                if (optionComputer === "rock") {
                    window.alert("Rock destroys scissors. Computer wins.");
                } else {
                    window.alert("Scissors cut paper. User wins.");
                }
            } else { //paper
                if (optionComputer === "rock") {
                    window.alert("Paper covers rock. User wins.");
                } else {
                    window.alert("Scissors cut paper. Computer wins.");
                }
            }
        } else {
            window.alert("Even");
        }
    } else {
        window.alert("Wrong value. Try again");
   
    }
}

rockPaperScissors();