//create an obj
let obj={
    a:"me",
    b:"you"
}
let c=document.createElement("div");
c.setAttribute("class","box1");
c.innerHTML=obj.a
document.body.append(c)

//making the rabit prototype
let rabbit={
    jump:"true"
}
rabbit.__proto__=obj;
let d=document.createElement("span");
d.setAttribute("class","box1");
d.innerHTML=rabbit.b;//accessing the value of the obj
document.body.append(d);

//button one
let f=document.createElement("button");
f.setAttribute("type","button");
f.innerHTML="make some unreal things"
document.body.append(f);
f.addEventListener("click",()=>{
    c.innerHTML="oh shit";

})
//button 2
let g=document.createElement("button");
g.setAttribute("type","button");
g.innerHTML="reverse the phenomena"
document.body.append(g);
g.addEventListener("click",()=>{
    c.innerHTML=obj.a;
})