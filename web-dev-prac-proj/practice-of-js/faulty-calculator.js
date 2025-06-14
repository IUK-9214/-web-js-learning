console.log("welcome to the faulty calculator");
let a =parseFloat(prompt("enter the number 1 : "));
let b=parseFloat(prompt("enter the  number 2 : "));
console.log("press 1 for  plus ");
console.log("press 2 for  minus ");
console.log("press 3 for  multiply ");
console.log("press 4 for  divide ");
let c=parseInt(prompt("enter your choice "));
switch(c){
case 1:
    let result=a-b;
    console.log("the result is : "+result);
    break;
case 2:
    let sol=a/b;
    console.log("the result is : "+sol);
    break;
case 3:
    let solu=a+b;
    console.log("the result is : "+solu);
    break;
case 4:
    let divide=a%b;
    console.log("the result is : "+ divide);
default:
console.log("re try")
break;

}