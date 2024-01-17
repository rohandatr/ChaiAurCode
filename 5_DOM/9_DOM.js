document.getElementsByTagName("li");
document.getElementsByTagName("li").length;
document.getElementsByTagName("li")[2].style.color = "red";


document.getElementsByClassName("btn");
//as it gives outpt in array form 
document.getElementsByClassName("btn")[0].style.color = "red";


//id should be unique so getElement will be singular
document.getElementById("title");
document.getElementById("title").innerHTML = "Hello World";


//using query selector
document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".btn");

document.querySelectorAll("#list .item")


//changing css style using DOM

document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.fontSize = "6rem";
document.querySelector("button").style.backgroundColor = "yellow";
//document.querySelector(".btn").style.backgroundColor = "yellow";



//classList --> we can modify css file using different methods

document.querySelector("button").classList.add("invisble");
document.querySelector("button").classList.remove("invisble");
//document.querySelector("h1").classList.add("huge");


//--------------------Manipulating attributes in html----------------------

document.querySelector("a");
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
//to change
document.querySelector("a").setAttribute("href","https://www.bing.com");

