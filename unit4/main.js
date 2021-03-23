function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  function getMonthName(month) {
      let name 
      switch (month) {
        case 1:
              name = "January"
            break
        case 2:
            name = "February"
            break
        case 3:
            name = "March"
            break
        case 4:
            name = "April"
            break
        case 5:
            name = "May"
            break
        case 6:
            name = "June"
            break
        case 7:
            name = "July"
            break
        case 8:
            name = "August"
            break
        case 9:
            name = "September"
            break
        case 10:
            name = "October"
            break
        case 11:
            name = "November"
            break
        case 12:
            name = "December"
            break
          default: "Not a Month"
              break
      }
      return name
  }

function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message = "travel to an exotic place for free"
            break
        case 2:
            message = "find the love of your life"
            break
        case 3:
            message = "uncover something unexpected that will lead you on a path of curiousity"
            break
        case 4:
            message = "want to be left alone due to cosmic circumstances"
            break
        case 5:
            message = "need to avoid letting small inconveniences get to you"
            break
        default: "Some sort of error occurred."
            break;
    }
    return message
}


  let month = getRandomIntInclusive(1, 12)
  let fate = getRandomIntInclusive(1, 5)
  let day = getRandomIntInclusive(1, 30)

  const monthName = getMonthName(month)
  const fortune = getFortune(fate)


  const fortuneRevealed = `On ${monthName} ${day}, you will ${fortune}.`

  document.querySelector('#fortune').innerText = fortuneRevealed