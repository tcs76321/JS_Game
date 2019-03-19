const playerScore = 0;
const computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
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

function game(playerChoice) {
    const compChoice = getCompChoice();
    switch (playerChoice + compChoice) {
        case "rr":
        case "ss":
        case "pp":
        case "ll":
        case "spockspock":
            console.log("tie");
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
            console.log("user wins");
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
            console.log("user loses")
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