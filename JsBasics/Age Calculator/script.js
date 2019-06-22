let age = prompt("What is your age?");
let days = age * 365.25;
alert(age + " years is roughly " + days + " days");

if (age < 0) {
    console.log("Error");
}

if (age === 21) {
    console.log("Happy 21st birthday!!");
}

if (age % 2 !== 0) {
    console.log("Your age is odd");
}

if (age % Math.sqrt(age) === 0){
    console.log("Your age is a perfect square");
}