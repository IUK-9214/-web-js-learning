function nice(name){
    console.log("this is "+name);
    console.log("he is "+name+" good boy ");
    console.log("this is "+name+" and he went to school");
    console.log("this is "+name+" and he never give up ");
}
nice("ibad");
function sum(a,b,c=6){
    return a+b+c
}
result =sum(4,5);
console.log(result);
result2=sum(3,5,7);
console.log("change the c value "+result2);
const fun1=(x)=>{
    console.log("this is and arrow function",x);
}
fun1(4);