const secretNum = Math.trunc(Math.random() * 100);
console.log(secretNum);

let guess = Number(prompt("Guess a number"));

while (guess != secretNum) {
    if (guess === secretNum) {
        alert("You got it right!");
    } else if (guess > secretNum) {
        alert("Too High");
    } else {
        alert("Too Low");
    }
}

/* let num = -10;
while (num < 20) {
    console.log(num);
    num++;
}

num = 10;
while (num < 40) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}

num = 300;
while (num < 333) {
    if (num % 2 !== 0) {
        console.log(num);
    }
    num++;
}

num = 5;
while (num <= 50) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num);
    }
    num++;
} */