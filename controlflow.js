// if statement 
if(condition){
    // code to execute if condition is true
}
//=== checks that the value and type of the data are the same or not
// == checks that the value of the data is the same or not

// if-else statement
if(condition){
    // code to execute if condition is true
}
else{
    // code to execute if condition is false
}

if(balance > 500 ) console.log("test"), console.log("test2") // this is also allowed but is highly unreadable hence, not recommended


// if-else if-else statement
if(condition1){
    // code to execute if condition1 is true
}
else if(condition2){
    // code to execute if condition2 is true
}
else{
    // code to execute if both condition1 and condition2 are false
}
 // or operator
if(condition1 || condition2){
    // code to execute if either condition1 or condition2 is true
}
// and operator
if(condition1 && condition2){
    // code to execute if both condition1 and condition2 are true
}
// switch statement
switch(expression){
    case value1:
        // code to execute if expression matches value1
        break;
    case value2:
        // code to execute if expression matches value2
        break;
    // more cases can be added
    default:
        // code to execute if expression does not match any case
        break;
}
 // for example
let day = 2;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}
// truthy and falsy values
// Truthy values: we assume these values are true only if they are not empty or zero
// Falsy values: we assume these values are false if they are empty or zero
// Falsy values in JavaScript: false, 0,-0, "", null, undefined, NaN, BigINT-0n
// Truthy values in JavaScript: true, 1, -1, "0", " ", "false", [], {}, BigINT-1n, etc.
// to check array
if(array.length > 0){
    // code to execute if array is not empty
}
// to check string
if(string.length > 0){
    // code to execute if string is not empty
}
// to check number
if(number !== 0){
    // code to execute if number is not zero
}
// to check object
if(Object.keys(object).length > 0){
    // code to execute if object is not empty
}
// false == 0 is true
// false == "" is true
// 0 == "" is true
// false == null is false
// false == undefined is false
// 0 == null is false
// 0 == undefined is false
// "" == null is false
// "" == undefined is false
// null == undefined is true
// NaN is not equal to anything, even itself
// NaN == NaN is false
// NaN === NaN is false
// NaN is a falsy value
// NaN is not equal to any number, even itself
// NaN is a special value in JavaScript that represents "Not a Number"
// It is used to represent a value that is not a valid number, such as the result

// ternary operator
let result = condition ? valueIfTrue : valueIfFalse;
// example
let age = 18;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.     


// ?? nullish coalescing operator
let value = variable ?? defaultValue;
// example
let userInput = null;
let defaultInput = "Default Value";
let finalInput = userInput ?? defaultInput;
console.log(finalInput); // Output: Default Value
// The ?? operator returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.
// This is useful for providing default values when dealing with potentially null or undefined variables.
// also when val = null ?? 10 ?? 15, in such cases it will return 10, because null is the first value that is null or undefined, and it will not check the next value (15) since it already found a valid value (10).