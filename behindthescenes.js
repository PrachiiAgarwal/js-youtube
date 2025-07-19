// Execution context
// what is the execution context of this code?
// this code is executed in a browser environment, specifically within a JavaScript file that is part of a web application. It is likely used to handle some behind-the-scenes functionality related to the application's operation, such as managing state or processing data.
// In javascript execution context is an environment in which a code is executed it contains all the neccessary things that is required to execute the code like variable, function, object etc. it is a conceptual container that holds the code to be executed
//Global execution context is the default exeution context in which all Javascript codes run. it is created when the script is loaded and it contains all the global variables, functions, and objects.it is theoutemost context in which all other context are created
// Function Execution Context is an execution context that is created when a function is invoked. It contains the function's arguments, local variables, and the value of 'this' within that function.each time a function is called, a new execution context is created forr that function call. This context is used to manage the execution of the function and it's scope chain.
// Eval execution context is a special execution context that is created when the eval() function is called. It allows you to execute a string of JavaScript code as if it were part of the current execution context. The eval() function can access variables and functions in the current scope, but it can also create new variables and functions that are local to the eval() call.

// memory creation phase or creation phase
// execution phase

let val1 = 10
let val2 = 5
function addNum(num1,num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

// Steps in which it will e executed
// 1. Global execution context is created
// 2. Memory creation phase is executed where all the variables are hoisted and initialized with undefined val1=val2=result1=result2 = undefined, addnum-> definition 
//3.execution phase is executed where the code is executed line by line val = 10 and val2 = 5
// 4. addNum function is called with val1 and val2 as arguments, a new execution context is created for the function call
// 5. num1 and num2 are initialized with the values of val1 and val
// after the global execution is completed it is deleted from the memory and the function execution context is deleted after the function call is completed
// 6. The total is calculated and returned to the global execution context

// call stack basically the execution of the function call is based on the LIFO principle (Last In First Out) the last function that is called is the first one to be executed and removed from the stack
