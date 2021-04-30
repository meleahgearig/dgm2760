const june = {
    full: '5th',
    first: '13th',
    new: '21th',
    last: '28th',
    fullMoon : () => {
        document.querySelector('#juneDay').textContent = `Full Moon is the ${june.full}`
    },
    firstMoon : () => {
        document.querySelector('#juneDay').textContent = `First Moon is the ${june.first}`
    },
    newMoon : () => {
        document.querySelector('#juneDay').textContent = `New Moon is the ${june.new}`
    },
    lastMoon : () => {
        document.querySelector('#juneDay').textContent = `Last Moon is the ${june.last}`
    },
}

const july = {
    full: '5th',
    first: '12th',
    new: '20th',
    last: '27th',
    fullMoon : () => {
        document.querySelector('#julyDay').textContent = `Full Moon is the ${july.full}`
    },
    firstMoon : () => {
        document.querySelector('#julyDay').textContent = `First Moon is the ${july.first}`
    },
    newMoon : () => {
        document.querySelector('#julyDay').textContent = `New Moon is the ${july.new}`
    },
    lastMoon : () => {
        document.querySelector('#julyDay').textContent = `Last Moon is the ${july.last}`
    },
}

const aug = {
    full: '3rd',
    first: '11th',
    new: '18th',
    last: '25th',
    fullMoon : () => {
        document.querySelector('#augDay').textContent = `Full Moon is the ${aug.full}`
    },
    firstMoon : () => {
        document.querySelector('#augDay').textContent = `First Moon is the ${aug.first}`
    },
    newMoon : () => {
        document.querySelector('#augDay').textContent = `New Moon is the ${aug.new}`
    },
    lastMoon : () => {
        document.querySelector('#augDay').textContent = `Last Moon is the ${aug.last}`
    },
}

document.querySelector('#juneFull').addEventListener('click', () => june.fullMoon())
document.querySelector('#juneFirst').addEventListener('click', () => june.firstMoon())
document.querySelector('#juneNew').addEventListener('click', () => june.newMoon())
document.querySelector('#juneLast').addEventListener('click', () => june.lastMoon())

document.querySelector('#julyNew').addEventListener('click', () => july.newMoon())
document.querySelector('#julyFirst').addEventListener('click', () => july.firstMoon())
document.querySelector('#julyFull').addEventListener('click', () => july.fullMoon())
document.querySelector('#julyLast').addEventListener('click', () => july.lastMoon())

document.querySelector('#augNew').addEventListener('click', () => aug.newMoon())
document.querySelector('#augFirst').addEventListener('click', () => aug.firstMoon())
document.querySelector('#augFull').addEventListener('click', () => aug.fullMoon())
document.querySelector('#augLast').addEventListener('click', () => aug.lastMoon())

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

function getPhase(moonPhase) {
    let message
    switch (moonPhase) {
        case 1:
            message = "New Moon"
            break
        case 2:
            message = "First Quarter"
            break
        case 3:
            message = "Waxing Crescent"
            break
        case 4:
            message = "Waxing Gibbous"
            break
        case 5:
            message = "Full Moon"
            break
        case 6:
            message = "Waning Gibbous"
            break
        case 7:
            message = "Third Quarter"
            break
        case 8:
            message = "Waning Crescent"
        default: "Some sort of error occurred."
            break;
    }
    return message
}


  let moonPhase = getRandomIntInclusive(1, 8)

  const randomMoon = getPhase(moonPhase)

  const randomMessage = `${randomMoon}.`
    console.log(randomMessage)
  const randomP = document.querySelector('#random')

  document.querySelector('#moonRandom').onclick = () => {
    randomP.textContent = randomMessage
  }
