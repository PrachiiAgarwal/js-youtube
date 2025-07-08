// singleton
// A singleton is a class that has only one instance 
// objects created via literals are not singleton but objects created via consttructor are singleton

// object literals
Object.create // constructor method
const JsUser = {
    name: "prachi",// name is acting as a string
    age: 20,
    [mySym]: "myKey1", // to declare a symbol correct syntax is to use square brackets
    location: "Jaipur",
    email: "p2611@gmail.com",
    lastloginDays: ["Monday","TUesday"]
} //object literals
console.log(JsUser.email);
console.log(JsUser["email"])

// using symbol as key
const sym = Symbol("email")
console.log(JsUser[mySym]) // using symbol as key
Object.freeze(JsUser) // freeze the object so that it cannot be modified


JsUser.greeting = function() {
    console.log("Hello JsUser")
}
console.log(JsUser.greeting())

JsUser.greetingTwo = function() {
    console.log('Hello JsUser, $(this.name)')
}
console.log(JsUser.greetingTwo())


// using constructor
const tinderUser = new Object() // singleton object
const y=tinderUser = {}// non singleton object

// objects inside objects 
const user = {
    name: "prachi",
    age: 20,
    Location: { // object inside object
        city: "Jaipur",
        country: {
            name: "India",
            code:"IN"
        }
    }

}

console.log(user.Location.city) // accessing nested objects by putting dots

// combining objects
const user1 = {1: "a", 2 :"b"}
const user2 = {3:"c", 4: "d"}
const user3 = Object.assign({},user1, user2) // empty object is passed as first argument to avoid modifying user1 and user2
const user3 = {...user1,...user2} // using spread operator is the best
console.log(user3)


user = [
    {},
    {},
    {},
]
 user[1].email // accessing nested object in an array
 console.log(tinderUaer);

 console.log(Objects.keys(tinderUser)); // returns an array of keys in an object ex ["name", "age","location"]
 console.log(Objects.values(tinderUser)) // accessing the values in an object as ["prach","20,'Jaipur"]
 console.log(Objects.entries(tinderUser)) // accessing the entries in an object as [["name:"prachi]] 

 // hasOwnProperty is used to check if the object has the named property or not

 // destructuring objects
 const course = {
    coursename: "Js in hindi",
    price: "199",
    courseInstructor: "prachi"
 }
 //course.courseInstructor
 // for ex const numbers = [10,20,30]
 // const [first, second, third] = numbers
 // console.log(first) ---- output = 10

 const {courseInstructor: instructor} = course