//TRICKY CODING IN BIG FIRMS IS NOT AT ALL ENCOURAGED
//REDABILITY IS THE KEY


let score = 33

console.log(typeof score);

let valueInNumber = Number(score)  //converts into number
console.log(typeof valueInNumber);


//"33" = 33 can easily be converted
//"33abc"= NaN cannot be converted
// true = 1; false =0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 = true; 0=false
//"" = false
//"hitesh" = true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);


// *************************** OPERATIONS******************************

let value = 3
let negValue = -value
console.log(negValue);    //returns the negative value

//BASIC MATHEMATICAL OPERATIONS
/*console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);   // double multiplication mean power
console.log(2/2);
console.log(2%3);*/


let str1 ="abc"
let str2 ="cde"

console.log("1" + 2);    //12
console.log(1 + "2");    //12
console.log("1" + 2 +2);  //122   same with these and all above
console.log(1 + 2 + "2");  //32   though not advisable

console.log(+true);    //returns 1 but not an ethical way to execute


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);