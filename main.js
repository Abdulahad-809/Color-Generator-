//we are asking the html hey our js variable needs the body tag at the starting index of it
const body = document.getElementsByTagName("body")[0]

body.style.background = "orange"
body.style.color = "black"

const about = document.getElementsByClassName("about")[0];
about.style.color = "black";

//function which takes value and changes the color
function setColor(name){
    body.style.background = name
}

function randomColor(){
   const red = Math.round(Math.random() * 255 )
   const blue = Math.round(Math.random() * 255 ) 
   const green = Math.round(Math.random() * 255 )

   const color = `rgb(${red},${green},${blue})`
   body.style.background = color
}
