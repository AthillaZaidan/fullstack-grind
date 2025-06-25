// /*
// *
// * rock paper scissors
// * rock = 0
// * paper = 1
// * scissors = 2
// * batu > gunting
// * gunting > kertas
// * kertas > batu
// *
// */
// function getComputerChoice(){
//     return Math.floor(Math.random() * 3);
// }

// function getHumanChoice(){
//     let option = prompt("input (rock/paper/scissors)");
//     option = option.toLowerCase();
//     if (option == "rock"){
//         return 0;
//     } else if (option == "paper"){
//         return 1;
//     } else if (option == "scissors"){
//         return 2;
//     } else {
//         alert("Pilihan tidak valid. Gunakan: rock, paper, atau scissors.");
//         return getHumanChoice(); 
//     }
// }

// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice){
//     if (humanChoice == 0 && computerChoice == 2){
//         humanScore++;
//         alert("MANUSIA MENANG");
//     } else if (humanChoice == 2 && computerChoice == 0){
//         computerScore++;
//         alert("ROBOT MENANG");
//     } else if (humanChoice == 2 && computerChoice == 1){
//         humanScore++;
//         alert("MANUSIA MENANG");
//     } else if (humanChoice == 1 && computerChoice == 2){
//         computerScore++;
//         alert("ROBOT MENANG");
//     } else if (humanChoice == 1 && computerChoice == 0){
//         humanScore++;
//         alert("MANUSIA MENANG");
//     } else if (humanChoice == 0 && computerChoice == 1){
//         computerScore++;
//         alert("ROBOT MENANG");
//     } else {
//         alert("DRAW");
//         return "DRAW";
//     }
//     return 0;
// }



// function playGame(){
//     let i = 0;
//     while (i < 5){
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         let hasil = playRound(humanSelection, computerSelection);
//         i++;
//         if (hasil == "DRAW"){
//             i--;
//         }
//     }
//     if (humanScore > computerScore){
//         console.log("MANUSIA MENANG");
//     } else {
//         console.log("ROBOT MENANG");
//     }
//     console.log(humanScore);
//     console.log(computerScore);
// }

// playGame(); 