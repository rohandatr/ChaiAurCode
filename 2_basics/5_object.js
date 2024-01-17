/*objects can be declared in 2 different ways
    1. literals
    2. constructor

    //singleton --- when we create object using constructor
            eg: Object.create   
*/

//object literals

const mySym = Symbol("Key1");    //Symbol created

const JsUser = {
    name :"Rohan",
    "full name" : "Rohan Datar",
    age : 20,
    [mySym] : "mykey1",        //symbol acess
    location : "pune",
    isLoggedIn : false,
    lastLoginDays :["monday","saturday"]
};

console.log(JsUser.name);    //Type1 : to print object
console.log(JsUser["age"]);  //Type2 : using []

console.log(JsUser["full name"]);
console.log(JsUser[mySym]);   // To print Symbol

//-----------------------------------------------------

JsUser.greeting = function(){
    console.log("Hello Js User");
}

//this. is used for same object refernce, it helps to specify the key of which object it is refering
// `  ${}`  ----> called as String interpolation 

JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`)
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//-------------------------------------------------
//singleton --- using constructor

const tinderUser = new Object()
tinderUser.id = "1234"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));




const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

//De-structure

const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Rohan"
}

//console.log(course.courseinstructor);

const {courseInstructor} = course
console.log(courseInstructor)

