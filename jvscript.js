const adviceWinner = document.querySelector(".advice");
const computerChoice = document.querySelector(".computer_choice");

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

function showWinner(winner) {
    adviceWinner.innerText = winner;
}

function showComputerChoice(choice) {
    computerChoice.innerHTML = choice;
}

document.querySelectorAll(`.option`).forEach((el) => {
    el.addEventListener("click", function (e) {
        let computerChoice = getValue();
        let playerSelection = e.target.id;

        if (computerChoice == "rock") {
            showComputerChoice("ROCK");
        } else if (computerChoice == "paper") {
            showComputerChoice("PAPER");
        } else {
            showComputerChoice("SCISSORS");
        }
        
        if (computerChoice == playerSelection) {
            showWinner("DRAW!")
            return;
        } else if (computerChoice == "rock") {
            if (playerSelection == "paper") {
                showWinner("PLAYER WIN!")
            } else if (playerSelection == "scissors") {
                showWinner("COMPUTER WIN")
            }
        } else if (computerChoice == "paper") {
            if (playerSelection == "scissors") {
                showWinner("PLAYER WIN!")
            } else if (playerSelection == "rock") {
                showWinner("COMPUTER WIN")
            }
        } else if (computerChoice == "scissors") {
            if (playerSelection == "rock") {
                showWinner("PLAYER WIN!")
            } else if (playerSelection == "paper") {
                showWinner("COMPUTER WIN")
            }
        }
    });
});