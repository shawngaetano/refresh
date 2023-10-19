const botNum = Math.floor(Math.random() * 100) + 1; // gens random number for bot

function checkNum(){ // function that checks user number

    const userInput = prompt("Enter a random number from 1 to 100 to see if you get ratio'd");

    if (userInput === null || !/^\d+$/.test(userInput)) { // user input handling
        alert("Try entering a number within the guidelines, pal."); 
        return;
    }

    const userNum = parseInt(userInput, 10);

    if (userNum < 1 || userNum > 100) {
        alert("Try entering a number within the guidelines, pal."); 
    }

    else if (userNum < botNum) {
        alert(`Get ratio'd my number was higher at ${botNum}`);
    }

    else if (userNum > botNum) {
        alert(`You won, I got ratio'd :( since my number was ${botNum}`);
    }

    else {
        alert(`Wow we guessed the same number...nice of ${botNum}`);
    }
}

checkNum();



