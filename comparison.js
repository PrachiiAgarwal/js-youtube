// ALL IN ALL ONE SHOULD MAKE SURE THAT THE VALUES SHOULD BE OF SAME DATATYPE WHILE PERFORMING COMPARISONS

//console.log(2 > 1);
//console.log(2 < 1);

console.log("2" > 1);  // though javascript automatically converts the string into number and returns a reult
                       // but it is addvisable that while comparing we should make sure that the values have same datatypes
 
                       
   console.log(null > 0);  // the results are false, fale and true and that's because the comaprison signs >,<,>=,<= work differently in javascript by 
   // by converting the null into a number where as the == (equality) works differently
   console.log(null == 0);
   console.log(null >= 0);  

   //=== (strict check) checks the value and datatype of the values