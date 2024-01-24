//resolve connects when we use .then 

const promiseOne = new Promise(function (resolve, reject){
    //Do an async task
    //DB calls, cryptograpghy, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

//resolve
promiseOne.then(function(){
    console.log('Promise Consumed');
})


//another way to code promise

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


//parameter to resolve

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

//

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
    },1000)
})