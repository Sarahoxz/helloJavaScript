console.log('Hello,World!');

node hello.js


let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
 return Math.floor(Math.random * 10)
}

const compareGuesses = (humanGuess, computerGuess, secretGuess) => {
  const humanDifference = Math.abs (targetGuess - humanGuess);
  const computerDifference = Math.abs (targetGuess - computerGuess);

  if (humanDiffernce <= computerDiffernce) {
    return true;
    } else {
      return false;
    }
  }

const updateScore = winner => {
 if (winner === "human") {
  humanScore++;
 } else if (winner === "computer") {
  computerScore++;
 }

 const advanceRound = () => currentRoundNumber++;

 }

console.log(generateTarget());
