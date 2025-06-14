console.log(" welcome to the random color generator")
let boxes=document.querySelector(".cont").children

function randm_num_gen(){
    val1=Math.ceil(0 +Math.random()*255);
    val2=Math.ceil(0+Math.random()*255);
    val3=Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=randm_num_gen()
    e.style.color=randm_num_gen()
})