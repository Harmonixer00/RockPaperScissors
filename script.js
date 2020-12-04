
//Randomly generates what the computer will output.
function computerPlay(){
    let result = Math.floor(Math.random() * 3);
    if(result === 0){
        result = "Rock";
    }
    else if(result === 1){
        result = "Paper";
    }
    else if(result === 2){
        result = "Scissors";
    }
    return result;
  }


  function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        outcome = "Tie Game!"
    }
    else{
        outcome = "Failed"
    }
    return outcome
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
 
// test variables
var kevin = 10;
var chris = 20;