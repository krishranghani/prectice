//#####6. Enter a, b, c find largest among them.#####=>    

const prompt = require('prompt-sync')();    

let a = Number(prompt("Enter the a value :-"));
let b = Number(prompt("Enter the b value :-"));
let c = Number(prompt("Enter the c value :-"));

if(a>b)
{
    if(a>c)
    console.log("a is gretest");
}else if(b>c)
    {
    console.log("b is gretest");    
    }else{
        console.log("c is gretest");
}