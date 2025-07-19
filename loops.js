// for loop
// for (initialization; condition; increment) {
//     // code to be executed
// }
for (let i = 0; i < 5; i++) {
    console.log(i);
    }

    // break and continue
// break - exits the loop
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // exits the loop when i is 3
    }
    console.log(i); // will log 0, 1, 2
}       
// continue - skips the current iteration and continues with the next one
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // skips the iteration when i is 2
    }
    console.log(i); // will log 0, 1, 3, 4
}       


// while loop
// while (condition) {
//     // code to be executed
// }
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// do-while loop
// do {
//     // code to be executed
// } while (condition);
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);


// Loops in Arrays
const arr = [1, 2, 3, 4, 5];
// for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// for...of loop
for (const value of arr) {
    console.log(value);
}

// map method
// in maps we use unique values and we apply use for of value
const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}   

// call back functions don't have names
// they are used to pass a function as an argument to another function
// forEach method
arr.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});
// for each does not return anything, it just executes the function for each element in the array

// filter method
// creates a new array with all elements that pass the test implemented by the provided function
const filteredArr = arr.filter(value => value > 2);
console.log(filteredArr); // [3, 4, 5]

// map chaining
// creates a new array with the results of calling a provided function on every element in the calling array
const mappedArr = arr.map(value => value * 2).map(value => value + 1);
// the first map multiplies each element by 2, the second map adds 1 to
console.log(mappedArr); // [3, 5, 7, 9, 11]