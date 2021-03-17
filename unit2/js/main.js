document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "This IZ Inspector Clouseau speaking on the pheaun."

function reDisplay() {
let windowSizes = `Window size is ${window.innerWidth} pixels wide and ${window.innerHeight} pixels tall.`
let offset = `Window is ${window.screenX} pixels from the left edge and ${window.screenY} from the top of the display.`

let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset}`
}

reDisplay()

document.getElementById("url").textContent = `The page URL is ${document.URL}`

document.querySelector('#documentTitle').innerText = `Document title is ${document.title}`
document.querySelector('#documentUpdate').innerText = `Document was last updated ${document.lastModified}`