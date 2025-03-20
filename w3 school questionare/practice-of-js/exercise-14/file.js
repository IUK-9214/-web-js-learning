
function create_p(texte){
    let item =document.createElement("p");
    item.style.background="black";
    item.style.color="green";
    item.innerHTML=texte;
    item.setAttribute("class","inserted")
    document.getElementById("hk").appendChild(item)
    }

let data = setTimeout(()=>{
let item = document.getElementById("hk");
item.style.background="black";
item.style.color="green";
item.innerHTML="Hacking initilaizing ";

let obj=[
    "Reading your files ","Password files detected ","Sending all Passwords and Personal files to server ","Cleaning up "
]

let i=0;
    let intr=setInterval(()=>{
create_p(obj[i])
let count=0;
   let inter= setInterval(()=>{
        item.textContent+=".";
        count+=1;
        if(count==4){
          clearInterval(inter)
        }
    },400)
    
i++;

if(i==4){
clearInterval(intr)
}

    },2000)
    
   let count=0;
   let inter= setInterval(()=>{
        item.textContent+=".";
        count+=1;
        if(count==4){
          clearInterval(inter)
        }
    },500)

}
,2000)
