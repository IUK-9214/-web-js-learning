
// let buttom = document.getElementById("btn")
// buttom.addEventListener("mouseover",()=>{
// document.querySelector(".box").innerHTML="this is amazing"
// })

let buttom = document.getElementById("btn")
buttom.addEventListener("contextmenu",()=>{
document.querySelector(".box").innerHTML="another amazing trick "
})
document.addEventListener("keydown",(e)=>{
    console.log(e.key,e.keycode)
})