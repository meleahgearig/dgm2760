function duplicateMenu() {
    // get all of the anchor elements from the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')

    //create the new list items for the bottom of the page
    let newList = document.createElement('ul')

    

    topList.forEach(menuItem => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        // 'copy' the same textContent from original to new
        newLink.textContent = menuItem.textContent
        // append children to make them appear in the DOM
        newLI.appendChild(newLink)
        newList.appendChild(newLI)
        console.log(newLI)
    })
    
    document.querySelector('#smallNavArea').appendChild(newList)

}

duplicateMenu()