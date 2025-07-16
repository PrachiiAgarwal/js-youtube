function sayMyName(){
    //function definition
}

sayMyName() //function execution


function addTwoNumbers(number1, Number2){ // function declaration with parameters
   console.log(number1 + number2)
}

addTwoNumbers(3,4)// passing the arguments

function addTwoNumbers(number1, Number2){ // function declaration with parameters
   let result = number1 + number2 // to execute
   return result // after return statement the function does not perform anything
}
console.log("Result", result)

function loginUserMessage(username){
    if(username == undefined){ // if-else condition

    
    return '${username} just logged in'
}}

loginUserMessage("Prachi")


function calculateCartPrice(...num1){ // this helps in putting a number of values in an array
    return num1
}

console.log(calculateCartPrice(200,400,500,600)) // now num1 will accept all the values this is called read operator
// if we write function calcukateCartPrice(val1,val2,...num1) // now here what will happen is val1 and val2 will take the first two vlues and any value after that will be accepted by num1

const user = {
    username: "prachi"
    price: 199
}

function handleObject(anyObject){
    console.log('Username is $(anyObject.user) and price is $(anyObject.user)')
}
handleObject(user)

const myNewArray = [200, 400, 500, 1000]

function returnSecondValue(getArray){
    return getArray[1] // it returns the value at index number 1
}