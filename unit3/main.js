document.querySelector('header > h1').innerText = "Guessing Game"
document.querySelector('header > h2').innerText = "Loops"

let correctNumber = Math.floor(Math.random() * 15)
correctNumber += 1

console.log(`The correct number is ${correctNumber}`)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0


function evalGuess() {
    totalGuesses += 1 //totalGuesses +1
    gamerGuess = document.querySelector('#guess').value
    console.log(totalGuesses, gamerGuess)

    const feedback = document.querySelector('#feedback')

    if (gamerGuess == correctNumber) {
        console.log(`gamerGuess is equal to correctNumber`)
    } else if (gamerGuess > correctNumber) {
        feedback.innerText = `Too High, Try Again`
    } else if (gamerGuess < correctNumber) {
        feedback.innerText = `Too Low, Try Again`
    }

}
