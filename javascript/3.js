//#####3. Enter one value find its divisible by 5 or not.#####=>

const prompt = require('prompt-sync')();

let x = Number(prompt("Enter the x value :-"));
if (x % 5 === 0) {
    console.log("x is divisible by 5");
} else {
    console.log("x is not divisible by 5");
}
