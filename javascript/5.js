//#####5. Enter Students marks whether pass or not.#####=>

const prompt = require('prompt-sync')();    

let x = Number(prompt("Enter the gujarati mark :-"));
console.log("gujarati mark :-",+x);

let y = Number(prompt("Enter the english mark :-"));
console.log("english mark :-",+y);

let z = Number(prompt("Enter the science mark :-"));
console.log("science mark :-",+z);

let marks = x+y+z;
let per = marks / 3;

if(per >33)

    {
        console.log("pass");
    }else 
    {
        console.log("Fail");
    }