
const testArray = ["John", "Jacob", "Jingle", "Heimer", "Schmidt"];
const uniformTest = [1, 1, 1, 1, 1, 3];
const sumTestArray = [3, 5, 1, 45, 7, 2];
const maxTestArray = [10, 5, 2, 8, 11, 6];

function printRevere(testArray) {
    for (let i = testArray.length - 1; i >= 0; i--) {
        console.log(i + ": " + testArray[i]);
    }
}

function isUniform(testArray) {
    let uniform = true;
    for (let i = 0; i < testArray.length; i++) {
        if (i === testArray.length - 1) break;
        else {
            if (testArray[i] !== testArray[i + 1]) {
                uniform = false;
            }
        }
    }
    return uniform;
}

function sumArray(testArray) {
    let result = 0;
    testArray.forEach(num => {
        result += num;
    });
    return result;
}

function max(testArray) {
    let max = 0;
    testArray.forEach(num => {
        if (num > max) max = num;
    });
    return max;
}

printRevere(testArray);
console.log(isUniform(uniformTest));
console.log(sumArray(sumTestArray));
console.log(max(maxTestArray));