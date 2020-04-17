/* var age = prompt("What is your age: ");

var leapYears = +age % 4;

var daysAlive = +age * 365 + leapYears;

console.log("You have been alive about " + daysAlive + " days."); */

// var age = prompt("enter your age: ");

// if( age < 0 ) {
//     console.log("Age can not be negative.");
// } else if( age == "21") {
//     console.log("Happy 21st birthday!");
// } else if ( age % 2 ) {
//     console.log("Your age is odd!");
// } else {
//     console.log("Your age is " + age);
// }

console.log("Print all numbers between -10 and 19");
var number = -10;
while( number <= 19 ) {
    console.log("number: " + number);
    number++;
}

console.log("Print all even numbers between 10 and 40");
number = 10;
while( number <= 40 ) {
    if( !(number % 2) ) {
        console.log("number is even: " + number);
    }
    number++;
}

console.log("Print all odd numbers between 300 and 333");
number = 300;
while( number <= 333) {
    if( number % 2 ) {
        console.log("number is odd: " + number);
    }
    number++;
}

console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
number = 5;
while( number <= 50 ) {
    if( !(number % 3) && !(number % 5) ) {
        console.log("fizzy buzzer: " + number);
    }
    number++;
}
