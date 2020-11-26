
//Randomly generates what the computer will output.
function computerPlay(){
    let result = Math.floor(Math.random() * 3);
    if(result === 0){
        result = 'Rock';
    }
    else if(result === 1){
        result = 'Paper';
    }
    else{
        result = 'Scissors';
    }
    return result;
  }

  //Test variables
var kevin = 10;
var chris = 20;