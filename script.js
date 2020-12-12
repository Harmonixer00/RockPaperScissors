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
    if(playerSelection == computerSelection) {
      outcome = "Tie!";
    } else if(playerSelection == "Rock" && computerSelection == "Scissors"){
     outcome = "You win! Rock beats Scissors";
    }else if(playerSelection == "Rock" && computerSelection == "Paper"){
      outcome = "You lose! Paper beats Rock!";
    } else if(playerSelection == "Paper" && computerSelection == "Rock"){
      outcome = "You win! Paper beats Rock!";
    }else if(playerSelection == "Paper" && computerSelection == "Scissors"){
      outcome = "You lose! Scissors beats Paper!";
    }else if(playerSelection == "Scissors" && computerSelection == "Paper"){
      outcome = "You win! Scissors beats Paper!";
    }else if (playerSelection == "Scissors" && computerSelection == "Rock"){
      outcome = "You lose! Rock beats Scissors!";
    }
     return outcome
  }
  
  const playerSelection = "Rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));



  // Test function (Delete later)
  function favoriteAnimal(animal) {
    console.log(animal + " is my favorite animal!")
  }
  
  favoriteAnimal('Goat')
