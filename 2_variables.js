const accountId = 14323;
let accountEmail = "Roohan@gjsgg.com";
var accountPassword = "123";
accountCity = "Pune";
let accountState;

//accountId = 2;  ---- not allowed

accountEmail = "hggded.com";
accountPassword = "232345";
accountCity = "mumbai";

console.log(accountId);
/*
Prefer not to use var because of issue in block scope an function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
