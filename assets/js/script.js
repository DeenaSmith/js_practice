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

        var countdownTimer = setInterval(function() {

        console.log(i);
        i = i - 1;

        if (i <= 0) {
            clearInterval(countdownTimer);
        }
    }, 1000);
}

startTimer(); 
    console.log("BOOM");

};

