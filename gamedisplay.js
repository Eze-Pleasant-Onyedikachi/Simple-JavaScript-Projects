// SETTING THE STAGE
/* let */ const player = "Per"
/* let */ const opponent = "Nick"
/* let */ const game = "AmazingFighter"
/* const */ let points = 0
/* const */ let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes