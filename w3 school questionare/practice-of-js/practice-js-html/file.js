let box_1=document.body.firstElementChild.children[0]
box_1.style.color="white"
box_1.style.backgroundColor="blue";

// let box_2=document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor="green"
// })
let boxs=document.getElementsByClassName("box")
console.log(boxs)
boxs[1].style.backgroundColor="lightgreen";
boxs[1].style.color="red";

boxs[2].style.backgroundColor="yellow";
boxs[2].style.color="indigo";

boxs[3].style.backgroundColor="black";
boxs[3].style.color="red";

let speacial=document.getElementById("mister")
speacial.style.backgroundColor="indigo"
speacial.style.color="white"
