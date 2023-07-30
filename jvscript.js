const adviceWinner = document.querySelector(".advice");
const spanComputer = document.querySelector(".computer_choice");
const playerChoice = document.querySelector(".player_choice");
const spanComputerPoints = document.querySelector(".computer_points");
const spanPlayerPoints = document.querySelector(".player_points");

function getValue() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        return "rock";
    } else if (randomNumber == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

const computerPoints = [];
const playerPoints = [];

function sumArray(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}


function showWinner(winner) {
    adviceWinner.innerText = winner;
}

function computerWin() {
    adviceWinner.innerText = "COMPUTER WIN!"
    computerPoints.push(1);
    sumArray(computerPoints);
    spanComputerPoints.innerText = sumArray(computerPoints);
}

function playerWin() {
    adviceWinner.innerText = "PLAYER WIN!"
    playerPoints.push(1);
    sumArray(playerPoints);
    spanPlayerPoints.innerText = sumArray(playerPoints);
}

document.querySelectorAll(`.option`).forEach((el) => {
    el.addEventListener("click", function (e) {
        let computerChoice = getValue();
        let playerSelection = e.target.id;

        playerChoice.innerText = playerSelection.toUpperCase();
        spanComputer.innerText = computerChoice.toUpperCase();
        
        if (computerChoice == playerSelection) {
            showWinner("DRAW!")
            return;
        } else if (computerChoice == "rock") {
            if (playerSelection == "paper") {
                playerWin();
            } else if (playerSelection == "scissors") {
                computerWin();
            }
        } else if (computerChoice == "paper") {
            if (playerSelection == "scissors") {
                playerWin();
            } else if (playerSelection == "rock") {
                computerWin();
            }
        } else if (computerChoice == "scissors") {
            if (playerSelection == "rock") {
                playerWin();
            } else if (playerSelection == "paper") {
                computerWin();
            }
        }
    });
});

console.log(playerPoints);