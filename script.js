function computerPlays(array_length) { //shows the scissor or rock or paper
    let array_index = Math.floor(Math.random() * array_length.length);
    let array_item = array_length[array_index];
    return array_item;
}

function whoWon(computerPlay, userPlay) {   //checks who won 
    if (computerPlay == "rock" && userPlay == "rock") {
        return ("Draw");
    }
    else if (computerPlay == "scissors" && userPlay == "scissors") {
        return ("Draw");
    }
    else if (computerPlay == "paper" && userPlay == "paper") {
        return ("Draw");
    }
    else if (computerPlay == "rock" && userPlay == "scissors") {
        return ("Computer won!!");
    }
    else if (computerPlay == "rock" && userPlay == "paper") {
        return ("Wow! You won!");
    }
    else if (computerPlay == "paper" && userPlay == "scissors") {
        return ("Wow! You won!");
    }
    else if (computerPlay == "paper" && userPlay == "rock") {
        return ("Computer won!!");
    }
    else if (computerPlay == "scissors" && userPlay == "paper") {
        return ("Computer won!!");
    }
    else if (computerPlay == "scissors" && userPlay == "rock") {
        return ("Wow! You won!");
    }
    else {
        return ("Oops! wrong input!!");
        playGame();  //if some error occurred user can play again
    }

}

function playGame() {  //plays game
    const possibleOutcomes = ['rock', 'scissors', 'paper'];

    //plays for 5 time
    for (let i = 5; i >= 1; i--) {
        let computerTurn = computerPlays(possibleOutcomes);
        let playerTurn1 = prompt(`You have got ${i} turns left\nEnter rock, paper or scissors: `);
        let playerTurn = playerTurn1.toLocaleLowerCase();
        alert(whoWon(computerTurn, playerTurn));
    }
}

// invoking playGame function
playGame();