// JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.


// there 2 types of datatypes
// 1. Primitive and non Primitive datatype based on the memory it is stored and accessed from
// PRIMITIVE DATATYPE: String, Number, Boolean, null, undefined, symbol, BigInt


// Reference type (non primitive): Array, Objects, Functions------return type is function 
// declaration of symbol
 //const id = Symbol('123');  // has different return type as well
 // to represent bigInt just put a n at the end of the number
 const bigInt = 1234567890n;

 // presentation of reference datatype
// return type of null is object
 //const alphabet=("a","b,"c);
 {// object
   //let name ="Prahi";
 }

//const myfunction = function() {
  //  console.log("Hello World");
//}

//primitive data type 
/*==================
String : type of string
Number : type of number 
BigInt : type of Bigint
Boolean : type of boolean
Null : type of object *
Undefined : type of undefined 
Symbol : type of Symbol

reference data type 
==================
array , object , function 
only fn type of function and other object */



// -----------------------------------------------

// types of memory:-
//1. Stack (used in primitive) -- whenever it is called the original is not accessed rather the copy is accessed hence, even after changing the copied value we get the same original as output
let a = 10;
let b = a;
console.log(b); // 10
b= 20;
console.log(b); // 20
console.log(a); //10
// a=20; // this will not change the value of b and vice versa
//2.Heap (used in non primitive) -- whenever it is called the original is called and the reference is passed to the copied value. hence, even after changing the copied value we get the changed value of original as output
let obj = {
  alpha = "abc" ;
  age = 20 ;
}
let obj2= obj;
obj2.name = "xyz" ;
console.log(obj2.name); //xyz
console.log(obj.name); //xyz
// this is because the reference of obj is passed to obj2 and hence, when we change the value of obj2 it also changes the value of obj
let name = "Doraemon";
let anothername = name;

console.log(anothername);