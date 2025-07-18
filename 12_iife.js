// Immediately invoked function expression (IIFE) to encapsulate the code
//IIFE to avoid polluting the global scope
//IIfE usually don't know where they need to stop the context after being invoked in those cases a semicolon is used at the end
(function chai(){ // named IIFE
    console.log("hello")
})();// to end the code ; is used

(function aurcode(name){
    console.log($(name))
})('prachi') // it is treated as function call only when it is invoked with () at the end
// unnamed IIFE can be written like () => {} arrow function