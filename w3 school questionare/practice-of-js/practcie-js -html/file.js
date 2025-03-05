let number=Math.random()
console.log(number)
let a=prompt("enter the numnber ")
let c=prompt("enter the operation")
let b=prompt("enter the second number ")

let obj={
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"%"
}
c=obj[c];
console.log(c)
if (number>0.1){
    console.log(`the result is ${a} ${c} ${b}`)
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}