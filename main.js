
//variable to function and lowercased

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()

  //if statement for three choices an user can have for the game

if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {

  //returns the users choice
  return userInput
} else {

  //Theres an error when no choices are picked

  console.log('There seems to be an error')
}
};
//console.log(getUserChoice('paper'))

const getComputerChoice = () => { 
  //random number for between 0 and 3 
  randomNumber = Math.floor(Math.random()* 3)
  //value of 0 will be rock and so on 
  if (randomNumber === 0) {
     return 'rock'
  } else if (randomNumber === 1) {
   return 'paper'
  } else if (randomNumber === 2) {
      return 'scissors'
  } else {
  return 'error'
  }
};
//console.log(getComputerChoice());
//console.log(getComputerChoice());
//console.log(getComputerChoice());
//determine who wins the game 
const determineWinner = (userChoice, computerChoice) => {

  //if user equal bomb automatically win
  if (userChoice === 'bomb') {
    return 'You win automatically'
  }//if game is a tie they will equal each
  if (userChoice === computerChoice) {
    return 'Game is a tie!'

  } //computer wins if paper
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won'
    } else {
      return 'You won'
    }
  } if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won'
    } else {
      return 'You won'
    }
  } if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won'
    } else {
      return 'You won'
    }
  } 
}; //testing the function 
console.log(determineWinner('scissors','paper'))
// function to play game 
const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice(); console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
//call function
playGame()
