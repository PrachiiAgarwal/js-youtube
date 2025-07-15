// constructor objects
const tinderUser = new Object() // singleton object
tinderUser.id = "123abc"
tinderUser.name = "Prachi"
tinderUser.isLoggenIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Prachi",
            Lastname: "Agarwal"

        }
    }
}
console.log(regularUser.fullname.userfullname.firstname); //accessing nested object properties
const obj1 ={1: "a, 2: "b}
const obj2 = {3: "a", 4:"b"}
// another method of combining objects
const obj3 = Object.assign({},obj1, obj2) // using Object.assign to combine objects
//const obj3 = {obj1, obj2}  combining objects
console.log(obj3);

// using spread operator
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    { id: 1
        email: h
    }

//Object.keys is used to get the keys of an object
//hasOwnProperty is used to check if an object has a property