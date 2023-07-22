// 1 = rock, 2 = paper, 3 = scissors

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

const play = document.querySelector(".play");

function gameOver() {
    alert("Sorry, you lost!")
}

function congrats() {
    alert("Congratulation, you won!")
}

function draw() {
    alert("DRAW!")
}

function startGame() {
    let computerChoice = getValue();
    let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();

    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        alert("You chose " + playerSelection + "!");
        alert("The computer chose " + computerChoice + "!");

        if (computerChoice === playerSelection) {
            draw();
            return;
        }

        if (computerChoice == "rock") {
            if (playerSelection == "paper") {
                congrats();
            } else if (playerSelection == "scissors") {
                gameOver();
            }
        } else if (computerChoice == "paper") {
            if (playerSelection == "scissors") {
                congrats();
            } else if (playerSelection == "rock") {
                gameOver();
            }
        } else if (computerChoice == "scissors") {
            if (playerSelection == "rock") {
                congrats();
            } else if (playerSelection == "paper") {
                gameOver();
            }
        }

    } else {
        alert("You are missing something!");
        return;
    }
}

play.addEventListener("click", startGame);