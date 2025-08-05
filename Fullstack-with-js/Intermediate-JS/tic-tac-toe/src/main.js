let round = 0;
let xScore = 0;
let oScore = 0;

let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let box9 = document.getElementById('box9');

box1.addEventListener('click', handleBoxClick);
box2.addEventListener('click', handleBoxClick);
box3.addEventListener('click', handleBoxClick);
box4.addEventListener('click', handleBoxClick);
box5.addEventListener('click', handleBoxClick);
box6.addEventListener('click', handleBoxClick);
box7.addEventListener('click', handleBoxClick);
box8.addEventListener('click', handleBoxClick);
box9.addEventListener('click', handleBoxClick);

let arr = ["", "", "", "", "", "", "", "", ""];

let play = false;
function handleBoxClick(event) {
  if(play){
    let boxIndex = parseInt(event.target.id.replace('box', '')) - 1;
    if (arr[boxIndex] !== "") return; 
    const symbol = document.createElement('div');
    symbol.classList.add('text-lg', 'font-[Lexend]', 'text-bold');
    if (round % 2 === 0) {
        symbol.innerHTML = "X";
        arr[boxIndex] = "X";
    } else {
        symbol.innerHTML = "O";
        arr[boxIndex] = "O";
    }
    event.target.appendChild(symbol);
    round++;

    const winner = checkWinner(arr);
    if (winner) {
      play = false;
      alert(winner + " wins!");
    } else if (round === 9) {
      play = false;
      alert("It's a draw!");
    }
  }
}

function checkWinner(arr) {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6]           
  ];
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
      return arr[a]; 
    }
  }
  return null; 
}

const playBtn = document.getElementById('play-btn');
playBtn.addEventListener('click', main);

function main(){
  play = true;
  round = 0;
  arr = ["", "", "", "", "", "", "", "", ""];
  for (let i = 1; i <= 9; i++) {
    const box = document.getElementById('box' + i);
    box.innerHTML = "";
  }
}