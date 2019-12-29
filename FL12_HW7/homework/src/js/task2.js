let confirmPlay = confirm('Do you want to play a game?');
if (!confirmPlay) {
    alert('You did not become a billionaire, but can.');
} else {
    let confirmPlayAgain = true;
    while (confirmPlayAgain) {
        let numberRange = 9;
        let totalPrizeWon = 0;
        let prizeWon = 0;
        let chooseNumber = Math.floor(Math.random() * numberRange);
        let currentPossiblePrize = 100;
        let attemptsLeft = 3;
        while (attemptsLeft > 0) {
            let guessNumber = +prompt('Please choose a roulette pocket number from 0 to ' + (numberRange - 1) + 
                '\nAttempts left: ' + attemptsLeft +
                '\nTotal Prize: ' + totalPrizeWon + '$' +
                '\nPossible prize on current attempt: ' + currentPossiblePrize + '$');
            guessNumber = Math.floor(guessNumber);
            if (chooseNumber === guessNumber) {
                prizeWon = currentPossiblePrize;
                totalPrizeWon = totalPrizeWon + prizeWon;
                let confirmContinue = confirm('Congratulation, you won!\nYour prize is: ' + prizeWon + 
                    '$\nDo you want to continue?');
                if (confirmContinue) {
                    attemptsLeft = 3;
                    currentPossiblePrize = currentPossiblePrize * 2;
                    numberRange = numberRange + 4;
                    chooseNumber = Math.floor(Math.random() * numberRange);
                } else {
                    attemptsLeft = 0;
                } 
            } else {
                currentPossiblePrize = currentPossiblePrize / 2;
                attemptsLeft--;
            }     
        }
        alert('Thank you for your participation. Your prize is: ' + totalPrizeWon + '$.');
        confirmPlayAgain = confirm('Do you want to play again?');        
    }
}