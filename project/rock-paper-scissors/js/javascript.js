/*
*
* rock paper scissors
* rock = 0
* paper = 1
* scissors = 2
* batu > gunting
* gunting > kertas
* kertas > batu
*
*/
function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}


let humanScore = 0;
let computerScore = 0;

function updateScoreUI() {
    playerScoreElement.textContent = "Player: " + humanScore;
    computerScoreElement.textContent = "Computer: " + computerScore;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == 0 && computerChoice == 2){
        humanScore++;
        updateScoreUI();
        return true;
    } else if (humanChoice == 2 && computerChoice == 0){
        computerScore++;
        updateScoreUI();
        return false;
    } else if (humanChoice == 2 && computerChoice == 1){
        humanScore++;
        updateScoreUI();
        return true;
    } else if (humanChoice == 1 && computerChoice == 2){
        computerScore++;
        updateScoreUI();
        return false;
    } else if (humanChoice == 1 && computerChoice == 0){
        humanScore++;
        updateScoreUI();
        return true;
    } else if (humanChoice == 0 && computerChoice == 1){
        computerScore++;
        updateScoreUI();
        return false;
    } else {
        return "DRAW";
    }
}

const bodyContainer = document.querySelector(".body");
const wordSelector = document.getElementById("word");
const buttonDivSelector = document.getElementById("button");
const buttonSelector = document.getElementById("play-btn");

const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");

buttonSelector.onclick = playGame;

let isPlaying = false;

function playGame(){
    if (isPlaying) return;
    isPlaying = true;
    const currentWord = document.getElementById("word");
    currentWord.textContent = "Choose Your Move!";
    const currentButtonDiv = document.getElementById("button");
    if (currentButtonDiv) currentButtonDiv.remove();
    const button1 = document.createElement("button");
    button1.textContent = "🪨 ROCK";
    button1.setAttribute("id", "button1");
    const button2 = document.createElement("button");
    button2.textContent = "📄 PAPER";
    button2.setAttribute("id", "button2");
    const button3 = document.createElement("button");
    button3.textContent = "✂️ SCISSORS";
    button3.setAttribute("id", "button3");
    bodyContainer.append(button1);
    bodyContainer.append(button2);
    bodyContainer.append(button3);
    let computerChoice = getComputerChoice();
    button1.onclick = function() {
        handleResult(0, computerChoice);
    };
    button2.onclick = function() {
        handleResult(1, computerChoice);
    };
    button3.onclick = function() {
        handleResult(2, computerChoice);
    };
}

function handleResult(humanChoice, computerChoice) {
    const result = playRound(humanChoice, computerChoice);
    document.getElementById("word").remove();
    document.getElementById("button1").remove();
    document.getElementById("button2").remove();
    document.getElementById("button3").remove();
    const winDeclaration = document.createElement("div");
    winDeclaration.setAttribute("id", "word");
    if (result === true) {
        winDeclaration.textContent = "🎉🎉SELAMAT KAMU MENANG😁😁";
    } else if (result === false) {
        winDeclaration.textContent = "💔💔DAMN KAMU KALAH😈😈";
    } else {
        winDeclaration.textContent = "DRAW";
    }
    bodyContainer.append(winDeclaration);
    setTimeout(function() {
        bodyContainer.innerHTML = "";
        const wordDiv = document.createElement("div");
        wordDiv.id = "word";
        wordDiv.textContent = "Click This Button to Play";
        const buttonDiv = document.createElement("div");
        buttonDiv.id = "button";
        const playBtn = document.createElement("button");
        playBtn.id = "play-btn";
        playBtn.textContent = "Click Me!";
        buttonDiv.appendChild(playBtn);
        bodyContainer.appendChild(wordDiv);
        bodyContainer.appendChild(buttonDiv);
        playBtn.onclick = playGame;
        isPlaying = false;
    }, 2000);
}
