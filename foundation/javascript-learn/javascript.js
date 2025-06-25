const container = document.querySelector(".container");
const body = document.querySelector("body");

const addContent_1 = document.createElement("h1");
addContent_1.classList.add("header");
addContent_1.textContent = "Athilla Zaidan Zidna Fann";
addContent_1.style.color = "blue";
container.appendChild(addContent_1);

const addContent_2 = document.createElement("p");
addContent_2.classList.add("par");
addContent_2.textContent = "Hey i'm Red";
addContent_2.style.color = "red";

container.appendChild(addContent_2);

const addContent_3 = document.createElement("h3");
addContent_3.classList.add("blue");
addContent_3.textContent = "Hey i'm Blue";
addContent_3.style.color = "blue"; 
container.appendChild(addContent_3);

const addDiv_1 = document.createElement("div");
addDiv_1.classList.add("newdiv");
addDiv_1.setAttribute("style", "border: 2px solid black; background-color: pink;");
container.insertAdjacentElement("afterend", addDiv_1);

const newDiv = document.querySelector(".newdiv");
const newH1InsideNewDiv = document.createElement("h1");
newH1InsideNewDiv.classList.add("h1insidediv");
newH1InsideNewDiv.textContent = "I'm in a div";
newDiv.append(newH1InsideNewDiv);

