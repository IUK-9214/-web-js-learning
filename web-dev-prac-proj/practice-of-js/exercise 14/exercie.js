 const timedealy=()=>{
    return new Promise((resolve, reject) => {
        timeout=1+6*Math.random();
        setInterval(()=>{
resolve();
        },timeout*1000)
    })
 }
 const additem= async (item)=>{
    await timedealy();
    let div=document.createElement("div");
    div.innerHTML=item;
    document.body.append(div);  
}

async function main() {

    let t= setInterval(()=>{
        let last =document.body.getElementsByTagName("div");
        last=last[last.length -1];
        if(last.innerHTML.endsWith("...")){
            last.innerHTML=last.innerHTML.slice(0, last.innerHTML.length-3)

        }
        else{
            last.innerHTML=last.innerHTML+"."
        }

    },700)

    let text = ["Initialized Hacking now reading your data",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"]
        for (let i in text){
            additem(text[i])
        }
        await timedealy()
        
}
main()