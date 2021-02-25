const getUserChoice = userInput => {
userInput = userInput.toLowerCase();

if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
  return userInput;
} else {
  console.log( "Error! Try again" );
}
}
//3,4
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  
  switch (randomNumber) {
    case 0 :
    return 'rock';
    case 1 :
    return "paper";
    case 2 : 
    return "scissors";
    case 3 :
    return "bomb"
  }
};


const determineWinner = (userChoice , computerChoice) => {
   if (userChoice === computerChoice) {
     return 'Its a tie';}
   
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer WON'
    } else {
      return 'You WON!'
    };
    }

if (userChoice === 'paper') {
  if(computerChoice === 'scissors') {
    return 'Computer WON'
  } else {
    return "You WON!"
  }
}

if (userChoice === 'scissors') {
  if (computerChoice === 'rock')
  return "The computer WON!" 
} else {
  return "You won!";
}

if (userChoice === 'bomb'){
  return "You won!";
}
}

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice() ;
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);

console.log(determineWinner(userChoice, computerChoice));
};


playGame();
