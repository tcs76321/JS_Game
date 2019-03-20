let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const spock_div = document.getElementById("sp");
const lizard_div = document.getElementById("l");

function getCompChoice () {
    const choices = ['r', 'p', 's', 'spock', 'l'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
    if (letter === "spock") return "Spock";
    if (letter === "l") return "Lizard";
}

function wins(player, computer) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(player) + " beats " + convertToWord(computer) + ". You won!";
    document.getElementById(player).classList.add('green-glow');
}

function ties(player, computer) {
    result_p.innerHTML = convertToWord(player) + " is " + convertToWord(computer) + ". You tied!";
}

function lose(player, computer) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(player) + " does not beat " + convertToWord(computer) + ". You lost!"
}

function game(playerChoice) {
    const compChoice = getCompChoice();
    switch (playerChoice + compChoice) {
        case "rr":
        case "ss":
        case "pp":
        case "ll":
        case "spockspock":
            ties(playerChoice, compChoice);
            break;
        case "rs":
        case "rl":
        case "pr":
        case "pspock":
        case "sp":
        case "sl":
        case "spocks":
        case "spockr":
        case "lspock":
        case "lp":
            wins(playerChoice, compChoice);
            break;
        case "sr":
        case "lr":
        case "rp":
        case "spockp":
        case "ps":
        case "ls":
        case "sspock":
        case "rspock":
        case "spockl":
        case "pl":
            lose(playerChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })

    spock_div.addEventListener('click', function() {
        game("spock");
    })

    lizard_div.addEventListener('click', function() {
        game("l");
    })
}

main();