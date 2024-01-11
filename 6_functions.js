// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,5);

// //-------------------------------

// function addTwoNumbers1(number1, number2){
    
//     let result = number1 + number2;
//     return result
// }

// const result = addTwoNumbers1(3,5);
// console.log("Result:", result);

// //------------------------------------------

// // function loginUserMessage(username){
// //     return `${username} just logged in`
// // }

// // console.log(loginUserMessage("Rohan"));



// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in `
// }

// console.log(loginUserMessage());

//Rest operator(...) it takes multiple arguments value for single parameter.
// It gives output as an array.
//Eg : shoping cart we have multiple itmes in the cart 

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 480, 500));

//using object in function

const user = {
    username : "rohan",
    price : 199
};

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user);
handleObject({
    username: "sam",
    price: 399
})

//using array
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue (myNewArray));