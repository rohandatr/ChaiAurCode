
const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr[2]);

//shallow copy -- it is copy whose share same reference copy 

//Deep copy  -- properties do not share same reference copy

const myHeroes = ["batman","superman"];

const myArr2 = new Array(1, 2, 3, 4, 5);

//Array method

myArr.push(6);

myArr.unshift(9)  // adds at start of the array
myArr.shift();

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join()  // join makes an array a string


console.log(myArr);
console.log(typeof newArr);

//slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C", myArr)
console.log(myn2);


const marvel_heroes = ["ironman","spiderman","thor"];
const dc_heroes = new Array ("flash", "superman", "batman");

allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes);

console.log(Array.isArray("Rohan"));
console.log(Array.from("Rohan"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));