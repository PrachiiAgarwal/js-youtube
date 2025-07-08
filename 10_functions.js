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
   return result
}
console.log("Result", result)

function loginUserMessage(username){
    if(username == undefined){ // if-else condition

    
    return '${username} just logged in'
}}

loginUserMessage("Prachi")