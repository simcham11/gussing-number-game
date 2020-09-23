let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}
const compareGuesses = (humanGuess, computerGuess, target) => {
  const getHumanGuess = Math.abs(target - humanGuess);
  const getComputerGuess = Math.abs(target - computerGuess);
  if(getHumanGuess === getComputerGuess || getHumanGuess < getComputerGuess){
    return true
  }else{
    return false
  }
}
const updateScore = (winner) => {
  if ('human' === winner) {
    return humanScore++;
  }else if('computer' === winner){
    return computerScore++;
  }
}
const advanceRound = () =>{
  return currentRoundNumber++
}
