const accountId = 12345
let accountEmail = "pagarwal@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur" //possibilities of declaring a variable is there but it's not at all recommended
let accountState; //declaration of a variables without any values is considered undefined

//semicolons too are not so serious
//accountId = 2 //not allowed as its a constant
accountEmail = "qwert@gmail.com"
accountPassword = "2345"
accountCity = "Delhi"


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
/*Prefer not to use var because of issue in block scope and functional scope*/