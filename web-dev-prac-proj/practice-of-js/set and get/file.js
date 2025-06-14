class name_seter{

    constructor (name){
        this.name=name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if (value.length<4){
            console.log(value);
            console.log("this name is too short ")
        return;
        }
        else
        {
            console.log(value);
            console.log("itna baraha nam ka kia karna ")
        }
        this._name=value;
    }

}
let me=new name_seter("ibad")

console.log(me)    