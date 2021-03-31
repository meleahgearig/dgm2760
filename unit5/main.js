// Create an array with 4 trees listed
const trees = ['oak', 'Pine', 'aspen', 'Bamboo']
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
    trees.push('redwood')
    listTrees()
}

// Add a pear to the start

document.querySelector('#add_pear').onclick = () => {
    trees.unshift('Pear')
    listTrees()
}

// Remove first tree

document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0) {
        trees.shift()
        listTrees()
    } else {
        errorElement.textContent = 'Can only remove trees if there are trees to be removed!'
    }
}

// Remove second tree

document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 1) {
        trees.splice(1, 1)
        listTrees()
    } else {
        errorElement.textContent = 'Can only remove second tree if a second tree exists in the list.'
    }
}

// Remove last tree

document.querySelector('#remove_treeLast').onclick = () => {
    if (trees.length > 0) {
        trees.pop()
        listTrees()
    } else {
        errorElement.textContent = 'No trees to remove.'
    }
}

// Sort the trees A>Z

document.querySelector('#sortTrees').onclick = () => {
    trees.sort()
    listTrees()
}

// Make all trees lowercase


document.querySelector('#lowerTrees').onclick = () => {
    let lowerTrees = trees.map(tree => tree.toLowerCase())
    console.log(lowerTrees)
    displayResults.innerHTML = `${lowerTrees} <span>${trees.length} elements long </span>`
}    
    // let lowerTreeList = ''
    // lowerTrees.forEach(tree => {
    //     lowerTreeList += `${tree} <br>`
    // })
    