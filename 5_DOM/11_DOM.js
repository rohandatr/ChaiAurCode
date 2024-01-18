document.getElementById("title")
//<h1 id=​"title" class=​"heading">​DOM Learning on Chai Aur Code​</h1>​

document.getElementById("title").id
//'title'

document.getElementById("title").claass
//undefined

document.getElementById("title").className
//'heading'

document.getElementById("title").getAttribute('id')
//'title'

document.getElementById('title').setAttribute('class','test')
//undefined


/* 
    innerHTML will show the tags or styling tags which are used in the content
    TextContent will show entire content written in the tag even if it is hidden with the help of CSS.
    innerText it will show the content in the tag but it wont show the text which is hidden with the help of CSS.

    To convert a nodeList in array we use Array.from()
    eg: Array.from(tempClassList)
*/


document.getElementsByClassName('listed-items')

const tempClass = document.getElementsByClassName('listed-items')

Array.from(tempClass)

const convertedArray = Array.from(tempClass)

convertedArray.forEach(function(li){
    li.style.color = "orange"
})