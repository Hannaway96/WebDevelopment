function isEven(num) {
    return num % 2 === 0;
}

function factorial(num) {
    let total = num;

    if (num === 0) {
        return 1;
    }
    for (let i = num - 1; i >= 1; i--) {
        total *= i;
    }
    return total;
}

function kebabToSnake(str) {
    return str.replace(/-/g, "_");
}

console.log(isEven(35));
console.log(isEven(20));

console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(0));

console.log(kebabToSnake("this-is-gonna-work"));