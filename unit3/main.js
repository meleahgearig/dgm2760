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
        feedback.innerText = `You win!`
        giveAward()
    } else if (gamerGuess > correctNumber && gamerGuess < 17) {
        feedback.innerText = `Too High, Try Again`
    } else if (gamerGuess < correctNumber && gamerGuess > 1) {
        feedback.innerText = `Too Low, Try Again`
    } else {
        feedback.innerText = `Please choose a number between 1 and 16 and try again!`
        totalGuesses -= 1
    }

    document.querySelector('#attempts').innerText = totalGuesses

}

function giveAward() {
    console.log(`Congratulations!`)
    let imagePath = ('#')
    switch (totalGuesses) {
        case 1:
        case 2:
        case 3: 
            imagePath = 'images/blue.jpg'
            break;
        case 4:
        case 5:
        case 6:
            imagePath = 'images/red.jpg'
            break;
        case 7:
        case 8:
        case 9:
        case 10:
            imagePath = 'images/white.jpg'
            break;
        case 11:
        case 12:
        case 13:
            imagePath = 'images/yellow.jpg'
            break;
        case 14:
        case 15:
        case 16:
            imagePath = 'images/green.jpg'
            break;

    }

    const awardImage = document.createElement('img')
    awardImage.setAttribute('src', imagePath)

    const ribbon = document.querySelector('#awards')
    
    ribbon.appendChild(awardImage)
    
    if (ribbon.hasChildNodes()) {
        ribbon.replaceWith(ribbon.lastChild, awardImage)
    }

}
//var newChild = ribbon.nextSibling
        //ribbon.replaceChild(newChild, awardImage)