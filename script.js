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
        return "Tie Game!"
    }else return "Try again!"
  }


  playRound("Rock", computerPlay())

  function favoriteAnimal(animal) {
    console.log(animal + " is my favorite animal!")
  }
  
  favoriteAnimal('Goat')