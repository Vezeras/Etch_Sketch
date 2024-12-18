//Purely for shits and giggles
console.log("What are you doing back here?")

const container = document.getElementById("container");
const btn = document.getElementById("btn");

function addGrid(usernum) {
    container.innerHTML=''
    for (let i = 0;i < usernum * usernum;i++) {
        const addDiv = document.createElement("div");
        addDiv.className = "smol";
        addDiv.addEventListener("mouseover", () => {
            addDiv.style.backgroundColor = 'cyan';
        })
        document.getElementById("container").appendChild(addDiv);
    }
}

function userGrid() {
    let usernum = prompt("Enter how many grids you want, with a minimum of 1, up to a maximum of 100", 16);
    
    if (usernum > 0 && usernum <= 100) {
        addGrid(usernum);
    } 
    else if (usernum === null) {}

    else alert("Enter a valid number between 1 and 100, ya dingus.")
    };

addGrid(16);