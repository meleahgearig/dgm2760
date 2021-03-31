// Create an array with 4 trees listed
let trees = ['oak', 'Pine', 'aspen', 'Bamboo']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

// Display the list of trees inside the displayResults div
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long </span>`
}

listTrees()

//Add a redwood to the end the old way
/* var addTreeStart = fuction() {
    trees.push("redwood");
    listTrees();
}; 
var redwood = document.getElementById('add_redwood');
redwood.onclick = addTreeStart; */

// More concise version of add a redwood to the end

document.querySelector('#add_redwood').onclick = () => {
    errorElement.textContent = ''
    trees.push('redwood')
    listTrees()
}

// Add a pear to the start

document.querySelector('#add_pear').onclick = () => {
    errorElement.textContent = ''
    trees.unshift('Pear')
    listTrees()
}

// Remove first tree

document.querySelector('#remove_tree1').onclick = () => {
    errorElement.textContent = ''
    if (trees.length > 0) {
        trees.shift()
        listTrees()
    } else {
        errorElement.textContent = 'Can only remove trees if there are trees to be removed!'
    }
}

// Remove second tree

document.querySelector('#remove_tree2').onclick = () => {
    errorElement.textContent = ''
    if (trees.length > 1) {
        trees.splice(1, 1)
        listTrees()
    } else {
        errorElement.textContent = 'Can only remove second tree if a second tree exists in the list.'
    }
}

// Remove last tree

document.querySelector('#remove_treeLast').onclick = () => {
    errorElement.textContent = ''
    if (trees.length > 0) {
        trees.pop()
        listTrees()
    } else {
        errorElement.textContent = 'No trees to remove.'
    }
}

// Sort the trees A>Z

document.querySelector('#sortTrees').onclick = () => {
    errorElement.textContent = ''
    trees.sort()
    listTrees()
}

// Make all trees lowercase

document.querySelector('#lowerTrees').onclick = () => {
    errorElement.textContent = ''
    trees = trees.map(tree => tree.toLowerCase())
    console.log(lowerTrees)
    let lowerTreeList = ''
    trees.forEach(tree => {
        lowerTreeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${lowerTreeList} <span>${trees.length} elements long </span>`
}

// Get tree name of #3

document.querySelector('#showName3').onclick = () => {
    errorElement.textContent = ''
    let tree3 = trees[2]
    console.log(tree3)
    if (trees.length > 2) {
        errorElement.innerHTML = `${tree3}`
    } else {
        errorElement.textContent = 'Not enough trees.'
    }
}

// Get tree name of #4

document.querySelector('#showName4').onclick = () => {
    errorElement.textContent = ''
    let tree4 = trees[3]
    console.log(tree4)
    if (trees.length > 3) {
        errorElement.innerHTML = `${tree4}`
    } else {
        errorElement.textContent = 'Not enough trees.'
    }
}