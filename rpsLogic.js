function getComputerChoice(){
    let val =  Math.floor(Math.random()*3)
    if(val==0) return "rock"
    if(val==1) return "paper"
    if(val==2) return "scissors"
}

function getUserChoice(){
    console.log("choose your hand:")
    console.log("1. Rock")
    console.log("2. Paper")
    console.log("3. Scissors")
    let choice = (prompt());
    return choice
}

let userScore=0
let computerScore=0

function playRound(userChoice,computerChoice){

}
