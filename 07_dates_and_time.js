// dates Date is an object in JavaScript
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// months start from 0 in javascript
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString()) //returns the date as mon jan 23 2023
let myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString()) // returns the date as 1/23/2023, 5:03:00 Am
let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); //returns the timesstamp in milliseconds 
console.log(myCreatedDate,getFullYear());// returns the year

//'${myCreatedDate.getMonth()}' and the time is 