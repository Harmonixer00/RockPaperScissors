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
     conclusion = "Victory";
    }else if(playerSelection == "Rock" && computerSelection == "Paper"){
      outcome = "You lose! Paper beats Rock!";
      conclusion = "Defeat";
    } else if(playerSelection == "Paper" && computerSelection == "Rock"){
      outcome = "You win! Paper beats Rock!";
      conclusion = "Victory";
    }else if(playerSelection == "Paper" && computerSelection == "Scissors"){
      outcome = "You lose! Scissors beats Paper!";
      conclusion = "Defeat";
    }else if(playerSelection == "Scissors" && computerSelection == "Paper"){
      outcome = "You win! Scissors beats Paper!";
      conclusion = "Victory";
    }else if (playerSelection == "Scissors" && computerSelection == "Rock"){
      outcome = "You lose! Rock beats Scissors!";
      conclusion = "Defeat";

    }
     return outcome
  }
  
  const playerSelection = "Rock";
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