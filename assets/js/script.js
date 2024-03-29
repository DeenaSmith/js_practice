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
    if (userChoice === computerChoice) {
        return 'The players have tied.'
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer has won with paper!'
        } else {
            return 'You are the winner!'
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer has won with scissors!'
        } else {
            return 'You are the winner!'
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
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




// Sleep tracker
const getSleepHours = day => {
    if (day === 'monday') {
        return 8
    } else if (day === 'tuesday') {
        return 7
    } else if (day === 'wednesday') {
        return 8
    } else if (day === 'thursday') {
        return 5
    } else if (day === 'friday') {
        return 8
    } else if (day === 'saturday') {
        return 7
    } else if (day === 'sunday') {
        return 8
    } else {
        return "Error!"
    };

};


const getActualSleepHours = () =>

    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday')


const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
};


const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log("You got " + actualSleepHours + " hours of sleep this week. You're right on track!")
    } else if (actualSleepHours > idealSleepHours) {
        console.log("You got " + (idealSleepHours - actualSleepHours) + " more hours of sleep than you needed this week.")
    } else if (actualSleepHours < idealSleepHours) {
        console.log("You got " + (idealSleepHours - actualSleepHours) + " hours of sleep less than you needed this week. Get some rest!")
    } else {
        console.log('Oops! Something went wrong, check your code.')
    }
};

calculateSleepDebt();




// Training Days running tracker based on type of event
const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else if (random === 2) {
        return 'Pentathlon';
    }
};


const getTrainingDays = event => {
    let days = ''
    if (event === 'Marathon') {
        days = 50;
    } else if (event === 'Triathlon') {
        days = 100;
    } else if (event === 'Pentathlon') {
        days = 200;
    }

    return days;
};

const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
const name = 'Nala';


logEvent(name, event);
logTime(name, days);


const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);




// Secret Message with Arrays
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
//console.log(secretMessage.length)

secretMessage.push('to', 'Program')
//console.log(secretMessage)

secretMessage[7] = 'right'
//console.log(secretMessage)

secretMessage.shift();
//console.log(secretMessage);

secretMessage.unshift('Programming');
//console.log(secretMessage)

secretMessage.splice(6, 5, 'know');
//console.log(secretMessage)

console.log(secretMessage.join(' '))




// Whale Speak Converter
const input = 'Whales rock and should rule the Earth.'
const vowels = ['a', 'e', 'i', 'o', 'u']
const resultArray = [];

for (let i = 0; i < input.length; i++) {
    //console.log(`inputIndex is ${i}.`)
    if (input[i] === 'e') {
        resultArray.push(input[i]);
    }
    if (input[i] === 'u') {
        resultArray.push(input[i]);
    }

    for (let v = 0; v < vowels.length; v++) {
        //console.log(`vowelIndex is ${v}.`)
        if (input[i] === vowels[v])
            //console.log(input[i])
            resultArray.push(input[i])
    }
}

//console.log(resultArray);
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);





const addTwo = num => {
    return num + 2;
}

const checkConsistentOutput = (func, val) => {
    console
    let checkA = val + 2;
    let checkB = func(val);
    return checkA === checkB ? func(val) : 'inconsistent results';
}

checkConsistentOutput(addTwo, 10);




// Reversing numbers
function reverseNum(num) {

    let numToStr = '' + num
    console.log(numToStr)

    let numStrSplit = numToStr.split('')
    console.log(numStrSplit)

    let splitNumReverse = numStrSplit.reverse()
    console.log(splitNumReverse)

    let reverseNum = splitNumReverse.join('')
    console.log(reverseNum)
}

reverseNum(12345);




// Checks if input is a palindrome
function checkPal(str) {
    // console.log('')
    // console.log(str)

    let toArr = str.split('');
    // console.log(toArr);

    let revArr = toArr.reverse();
    //console.log(revArr);

    let revWord = revArr.join('');
    //console.log(revWord);

    if (str === revWord) {
        console.log("Yep, this is a palindrome.")
    }

    if (str !== revWord) {
        console.log("No, idiot. This isn't a palindrome.")
    }
}

checkPal('poohbigp')




// Grammar Checker
let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a stunning 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

//let count = 0; uncomment out to work, commented out to avoid scope errors with another practice problem

storyWords.forEach((word) => {
    count++;
})
console.log(count)

storyWords = storyWords.filter((word) => {
    return word !== unnecessaryWord;
})

storyWords = storyWords.map((word) => {
    return word === misspelledWord ? 'beautilful' : word;
}
)

let badWordIndex = storyWords.findIndex((word) => {
    return word === badWord;
});
console.log(badWordIndex);

storyWords[78] = 'really';

let lengthCheck = storyWords.every((word) => {
    return word.length < 10
})
console.log(lengthCheck)

storyWords.forEach((word) => {
    word.length > 10 && console.log(word)
})


//console.log(storyWords)
console.log(storyWords.join(' '))




//Sorts a word alphabetically
function alphabetize(word) {
    console.log(word)

    let array = word.split('')
    console.log(array)

    let sorted = array.sort()
    console.log(sorted)

    let final = sorted.join('')
    console.log(final)
}

alphabetize('shelbyisaboob')




//First letter in a phrase to caps
function capFirstLetter(words) {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
        separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
            separateWord[i].substring(1);
    }
    return separateWord.join(' ');
}
console.log(capFirstLetter('this is basic coding practice'));