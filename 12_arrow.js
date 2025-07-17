const user = {
    username: "prachi",
    price: 100
}
welcomemessage = function(){
    console.log('$(this.username) , welcome to the website");
}

// this function points to the current object

// arrow function
 function chai(){
    console.log(this);
 }

 chai() // this will point to globl object

 const chai = ()  =>{ // this is an arrow function which does not have its own this
 username: "prachi",
    price: 100;
 }

 const addonetwo = (num1, num2) => num1 + num2// this is arrow function with implicit return where you don't need to write return statement