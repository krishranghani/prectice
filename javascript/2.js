//#####2. Enter one value find its positive or negative.#####=>

const prompt = require('prompt-sync')();

let x = Number(prompt("Enter the x value :-"));
if ((x >= 0)) {
    console.log("Value of x is :-", +x);
    console.log("x is positive");
} else {
    console.log("Value of x is :-", +x);
    console.log("x is negative");
}

