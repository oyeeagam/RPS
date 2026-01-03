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
    userChoice=userChoice.toLowerCase()

    if(userChoice === computerChoice){
        console.log(`its a tie : both chose ${userChoice}`)
    }
    else if(userChoice=='rock'&&computerChoice=='scissors'){
        console.log(`you won: rock beats scissors`)
        userScore++
    }
    else if(userChoice=='rock'&&computerChoice=='paper'){
        console.log(`you lost: paper beats rock`)
        computerScore++
    }
    else if(userChoice=='paper'&&computerChoice=='scissors'){
        console.log(`you lost: scissors beats paper`)
        computerScore++
    }
    else if(userChoice=='paper'&&computerChoice=='rock'){
        console.log(`you won: paper beats rock`)
        userScore++
    }
    else if(userChoice=='scissors'&&computerChoice=='paper'){
        console.log(`you won: scissors beats paper`)
        userScore++
    }
    else if(userChoice=='scissors'&&computerChoice=='rock'){
        console.log(`you lost: rock beats scissors`)
        computerScore++
    }
}

function playGame(){
 

    for(let i =1;i<6;i++){
        let userChoice = getUserChoice()
        let computerChoice = getComputerChoice()
        
        playRound(userChoice,computerChoice)
       
    }
     if(userScore>computerScore)
            console.log("you won by "+(userScore-computerScore)+" rounds!!")
    else if(userScore<computerScore)
            console.log("you lost by "+(computerScore-userScore)+" rounds")
    else 
        console.log("you both are tied yet")
}

playGame();