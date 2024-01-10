function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers(3,5);

//-------------------------------

function addTwoNumbers1(number1, number2){
    
    let result = number1 + number2;
    return result
}

const result = addTwoNumbers1(3,5);
console.log("Result:", result);

//------------------------------------------

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Rohan"));



function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
}

console.log(loginUserMessage());