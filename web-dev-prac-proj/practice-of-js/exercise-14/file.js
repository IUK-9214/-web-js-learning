function create_p(texte) {
    let item = document.createElement("p");
    item.style.background = "black";
    item.style.color = "green";
    item.innerHTML = texte;
    item.setAttribute("class", "inserted");
    document.getElementById("hk").appendChild(item);
}

let data = setTimeout(() => {
    let item = document.getElementById("hk");
    item.style.background = "black";
    item.style.color = "green";
    item.innerHTML = "";  

    let obj = [
        "Hacking initializing",
        "Reading your files",
        "Password files detected",
        "Sending all Passwords and Personal files to server",
        "Cleaning up"
    ];

    let i = 0;

    let intr = setInterval(() => {
        let newLine = document.createElement("p"); 
        newLine.style.color = "green";
        newLine.textContent = obj[i]; 
        document.getElementById("hk").appendChild(newLine); 

        let count = 0;
        let inter = setInterval(() => {
            newLine.textContent += "."; 
            count += 1;
            if (count == 4) {
                clearInterval(inter);
            }
        }, 400);

        i++;

        if (i == obj.length) {
            clearInterval(intr);
        }

    }, 2000);

}, 2000);
