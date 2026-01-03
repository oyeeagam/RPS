function getComputerChoice(){
    let val =  Math.floor(Math.random()*3)
    return val
}

function getUserChoice(){
    console.log("choose your hand:")
    console.log("1. Rock")
    console.log("2. Paper")
    console.log("3. Scissors")
    let choice = parseInt(prompt());
    return choice
}

console.log(getUserChoice())