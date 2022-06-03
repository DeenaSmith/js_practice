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

    for (var i=0; i < n; i++) {
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

