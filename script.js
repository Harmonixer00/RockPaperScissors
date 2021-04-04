function computerPlay(){
    let result = Math.floor(Math.random() * 3);
    if(result === 0){
        result = "rock";
    }
    else if(result === 1){
        result = "paper";
    }
    else if(result === 2){
        result = "scissors";
    }
    return result;
  }

  function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
      outcome = "Tie!";
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
     outcome = "You win! Rock beats Scissors";
     conclusion = "Victory";
    }else if(playerSelection == "rock" && computerSelection == "paper"){
      outcome = "You lose! Paper beats Rock!";
      conclusion = "Defeat";
    } else if(playerSelection == "paper" && computerSelection == "rock"){
      outcome = "You win! Paper beats Rock!";
      conclusion = "Victory";
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
      outcome = "You lose! Scissors beats Paper!";
      conclusion = "Defeat";
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
      outcome = "You win! Scissors beats Paper!";
      conclusion = "Victory";
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
      outcome = "You lose! Rock beats Scissors!";
      conclusion = "Defeat";

    }
     return outcome
  }
  
  const playerSelection = prompt("Make your move. Rock, Paper or Scissors").toLowerCase();
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

  function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
      playRound(playerSelection, computerSelection);
      if (conclusion === "Victory"){
        playerScore ++
      }else if (conclusion === "Defeat"){
        computerScore ++
      }
      console.log(playerScore)
      console.log(computerScore)
    }
    return conclusion;
  }

  console.log(game())