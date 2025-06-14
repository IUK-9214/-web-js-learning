
// let buttom = document.getElementById("btn")
// buttom.addEventListener("mouseover",()=>{
// document.querySelector(".box").innerHTML="this is amazing"
// })

// let buttom = document.getElementById("btn")
// buttom.addEventListener("contextmenu",()=>{
// document.querySelector(".box").innerHTML="another amazing trick "
// })
// document.addEventListener("keydown",(e)=>{
   
// if (e.key==Arrowup){
//     console.log("fuck you ")

// }
// else{
//     console.log(e.key)
// }
// })
function im(){
    console.log("this is the im fucntion i will call it later in the website "); 
}
function call_me(im){
    im();
    console.log("this is the call back fucntion i will call it later in the website "); 
}
const fun = (call_me)=>{
    call_me(im);
console.log("this is the function where i use the call back function ");

}
async function another(number) {
    console.log(number)
}

function main()
{
    fun(call_me)
    another(8);
}
main();