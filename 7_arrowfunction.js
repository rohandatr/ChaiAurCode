// // this is used to refer current context
// const user = {
//     username: "rohan",
//     price: 999,

//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to website`);
//     }
// }
// user.welcomeMessage()

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));


//Implicit -> we dont write return keyword and curly braces
const addTwoNumbers = (num1, num2) => (num1 + num2)
console.log(addTwoNumbers(5,6));