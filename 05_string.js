const name = "Prachi";
const repoCount = 2;
// ideal way of using string
console.log("hello my name is  $(name) and my repo count is $(repoCount)");

let book = new String("Ikigai");
console.log(book[0]); //I-----method accesing the individual keys of the string
console.log(book.__proto__); //String prototype
console.log(book.length); //8