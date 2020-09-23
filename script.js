let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}
let compareGuesses = (humanGuess, computerGuess, target) => {
  let getHumanGuess = Math.abs(target - humanGuess);
  let getComputerGuess = Math.abs(target - computerGuess);
  if(getHumanGuess === getComputerGuess || getHumanGuess < getComputerGuess){
    return true
  }else{
    return false
  }
}
let updateScore = (winner) => {
  if ('human' === winner) {
    return humanScore++;
  }else if('computer' === winner){
    return computerScore++;
  }
}
let advanceRound = () =>{
  return currentRoundNumber++
}
