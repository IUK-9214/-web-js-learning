let obj={
    name:"ibad",
    age:20
}
console.log(obj.name);

class animal{
    constructor(name){
        this.name=name;
        console.log(name);
    }
     eat() {
        console.log("i m not eating ")
    }
    running(){
        console.log("i m searching for food")
    }
}
class lion extends animal{
    constructor(name){
        super(name);
        this.name=name;   
    }
    roar(){
        console.log("i m a lion and i m the king of king ")
    }

}

let me1=new lion("Mufasa")
me1.roar()
me1.eat();
me1.running();