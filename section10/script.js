/* var age = prompt("What is your age: ");

var leapYears = +age % 4;

var daysAlive = +age * 365 + leapYears;

console.log("You have been alive about " + daysAlive + " days."); */

var age = prompt("enter your age: ");

if( age < 0 ) {
    console.log("Age can not be negative.");
} else if( age == "21") {
    console.log("Happy 21st birthday!");
} else if ( age % 2 ) {
    console.log("Your age is odd!");
} else {
    console.log("Your age is " + age);
}