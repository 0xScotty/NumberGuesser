let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(input1, input2) {
    return Math.abs(input1 - input2);
}

function compareGuesses(currentHumanGuess, computerGuess, target) {
    humanDif = getAbsoluteDistance(target, currentHumanGuess);
    computerDif = getAbsoluteDistance(target, computerGuess);
    return humanDif <= computerDif;
}

function updateScore(winner) {
    switch (winner) {
        case 'human':
            humanScore = humanScore + 1;
            break;
        case 'computer':
            computerScore = computerScore + 1;
            break;
    }
}

function advanceRound() {
    currentRoundNumber = currentRoundNumber + 1;
}

function alert(input1) {
    return input1 >= 0 && input1 <= 9;
}