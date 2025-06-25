const buttonSelector = document.getElementById("button");
const containerSelector = document.querySelector(".container");

let size = 16;
const BOX_SIZE = 960;

function clearContainer(){
    containerSelector.innerHTML = "";
}
function setSize(){
    size = parseInt(prompt("Enter size: (max 100)"));
    if (size > 100 || size < 1 || isNaN(size)){
        setSize();
        return;
    }
    populateDiv(size);
}

buttonSelector.onclick = setSize;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function getRandomColor() {
    const r = Math.floor((Math.random() * 127) + 127);
    const g = Math.floor((Math.random() * 127) + 127);
    const b = Math.floor((Math.random() * 127) + 127);
    return `rgba(${r},${g},${b},0.35)`;
}

function populateDiv(size){
    clearContainer();
    containerSelector.style.display = "grid";
    containerSelector.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    containerSelector.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    containerSelector.style.width = BOX_SIZE + "px";
    containerSelector.style.height = BOX_SIZE + "px";
    containerSelector.style.border = "2px solid black";
    containerSelector.style.background = "white";
    containerSelector.style.margin = "0 auto";
    for (let i = 0; i < size * size; i++) {
        const newDiv = document.createElement("div");
        newDiv.style.outline = "1px solid #eee"; 
        newDiv.style.background = "white";
        newDiv.style.aspectRatio = "1 / 1";
        newDiv.addEventListener('mouseenter', function(){
            this.style.backgroundColor = getRandomColor();
        });
        containerSelector.appendChild(newDiv);
    }
}

populateDiv(size);