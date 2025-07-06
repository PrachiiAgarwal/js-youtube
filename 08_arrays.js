const myArr = [0,1,2,3,4,5] // it can be mixed i.e. alphabets and numbers can co-exist
  //when we copy an arrow it creates a shallow copy i.e copies which are linked to the main array meaning to say is whatever changes are made in the copied version is also made in the original array 
  let Arr2 = myArr // Shallow copy
  
  // deep copies are the copies which do not share the same reference point as the original array i.e. changes made in the original version does not affect the copied version
  let Arr3 = [...myArr] // deep copy

  const myArr2 = new Array(1,2,3,4)
  console.log(myArr[0]);

  // Array methods

  myArr.push(6) // adds value to the array
   myArr.pop() //removes the last value from the array
   myArr.unshift() // adds value to the begining of the array
   myArr.shift() // removes the first value from the begining of the array
   myArr.splice(2,1) // removes the value at index 2 and remves 1 value from the array
   myArr.includes(2) // checks if the value is present in the array or not
   myArr.indexOf(2)
   myArr.join('') // joins the array elements into a string
   myArr.reverse()// reverses the array 


   // slice and splice
   // slice does not change the original array, it returns a new array
   let myArr4 = myArr.slice(2,4) // returns the elements from index 2 to index 4 without including index 4
 // for example if Arr = [1,2,3,4,5] then myArr will be [3,4]
 // splice changes the original array, it removes the elements from the original array
 let myArr5 = myArr.splice(2,4) // removes the elements from index 2 to index 4 without including index 4
 // for example if Arr = [1,2,3,4,5] them myArr will be [1,2,5] and myArr5 will be [3,4]
 