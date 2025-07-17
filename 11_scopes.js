// scopes
// anything outside curly braces is global scope
{let a = 10
const b = 20
var c = 30} // this is a block scope, variables declared here are not accessible outside

console.log(a); // it will throw an error that a is not defined
console.log(b); // it will throw an error that b is not defined
console.log(c); // it will work because var is function scoped

// console statement inside scope curly braces will only print the values inside them whereas outside it will throw an error

// nested scopes
function one(){
    const username = "prachi"

    function two(){
        const website = "youtube"
    }
}
// here username is accessible inside function two but website is not accessible outside function two
// this is called lexical scope, where inner function can access the variables of outer function

// +++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++

function addone(num){ // in this case function call statement can be written before the function declaration
    return num + 1
}

addone(5)

const addtwo = function(num){ // while in this case function call can't be written before function decalaration
    // this is called function expression
    return num+2
}

addtwo(5)