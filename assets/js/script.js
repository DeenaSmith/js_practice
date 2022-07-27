// "Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."

let count = 0

// FIZZ BUZZ Button
document.getElementById("first").onclick = (e) => {
    //count += 1;
    //console.log("test", count);

    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz", i)
        } else if (i % 3 === 0) {
            console.log("fizz", i);
        } else if (i % 5 === 0) {
            console.log("buzz", i)
        } else {
            console.log(i)
        };
    };

};



// Self-Destruct Button
document.getElementById("explosion").onclick = (e) => {
    var i = 5;

    function startTimer() {

        var countdownTimer = setInterval(function () {

            console.log(i);
            i = i - 1;

            if (i <= 0) {
                clearInterval(countdownTimer);
                console.log("BOOM")
            }
        }, 1000);
    }

    startTimer();
};



// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

var arr = [-3, -2, 0, 1, 5]

function plusMinus(arr) {
    var n = arr.length;
    var positive = 0;
    var negative = 0;
    var zero = 0

    for (var i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positive += 1;
        } else if (arr[i] < 0) {
            negative += 1;
        } else {
            zero += 1;
        }
    };

    var pos = positive / n;
    var neg = negative / n;
    var zer = zero / n;

    console.log(pos.toFixed(6));
    console.log(neg.toFixed(6));
    console.log(zer.toFixed(6));
};

plusMinus(arr);


// Race day if/else based on variables 

let raceNumber = Math.floor(Math.random() * 1000);
let regEarly = true;
let runnerAge = 18;

if (runnerAge > 18 && regEarly === true) {
    console.log(raceNumber += 1000)
}

if (regEarly === true && runnerAge > 18) {
    raceNumber += 1000
    console.log('Your race starts at 9:30am ' + raceNumber)
} else if (regEarly === false && runnerAge > 18) {
    console.log('Your race starts at 11:00am ' + raceNumber)
} else if (runnerAge < 18) {
    console.log('Youth registrants run at 12:30 pm (regardless of registration).')
} else if (runnerAge === 18) {
    console.log('See registration desk.')
}




//Rock, paper, scissors game
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput
    } else {
        console.log("Error, please enter a valid response.")
    }
}


const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)

    switch (randomNumber) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
};


const determineWinner = (userChoice, computerChoice) => {
    if( userChoice === computerChoice) {
        return 'The players have tied.'
    }
    if(userChoice === 'rock') {
        if(computerChoice === 'paper') {
            return 'The computer has won with paper!'
        } else {
            return 'You are the winner!'
        }
    }

    if(userChoice === 'paper') {
        if(computerChoice === 'scissors') {
            return 'The computer has won with scissors!'
        } else {
            return 'You are the winner!'
        }
    }

    if(userChoice === 'scissors') {
        if(computerChoice === 'rock') {
            return 'The computer has won with a rock!'
        } else {
            return 'You are the winner!'
        }
    }
};


const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();

    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`)

    console.log(determineWinner(userChoice, computerChoice))
};


playGame();