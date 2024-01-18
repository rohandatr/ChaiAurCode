const parent = document.querySelector('.parent')
console.log(parent);

console.log(parent.children)
console.log(parent.children[1].innerHTML)

for(let i = 0; i<parent.children.length; i++){
    console.log(parent.children[i].innerHTML);
}

parent.children[1].style.color = "orange"
console.log(parent.firstElementChild);

// Creating a element in using js

const div = document.createElement('div')
console.log(div);
div.className = 'main';
div.setAttribute("title","generated title");
div.style.backgroundColor = "green"
div.style.padding = "12px";
//div.innerText = "Chai aur Code"
const addText = document.createTextNode("Chai aur Code")
div.appendChild(addText)

document.body.appendChild(div)