//#####4. Enter one value find its divisible by 5 and 3 or not.#####=>

const prompt = require('prompt-sync')();        

let x = Number(prompt("Enter the x value :-"));
if (x % 5 === 0 && x % 3 === 0) {
    console.log("x is divisible by both 5 and 3");
} else {
    console.log("x is not divisible by both 5 and 3");
}
