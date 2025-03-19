let btun=document.getElementById("btn")
btun.addEventListener("click",()=>{
alert("Your pc is hacked")
let item=document.createElement("div")
item.setAttribute("class","hacking");
item.style.backgroundColor="green";
item.innerHTMLL="this is my insterted";
item.style.color="white";
document.getElementsByClassName(".hacker").appendchild(item);
})