//#####1. Enter two value find smallest.#####=>

const prompt = require('prompt-sync')();

let x = Number(prompt("Enter x: "));
let y = Number(prompt("Enter y: "));

if (x < y) {
    console.log("x is lowest");
} else {
    console.log("y is lowest");
}

