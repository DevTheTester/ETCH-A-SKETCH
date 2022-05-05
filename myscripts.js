// Get grid container as variable, create grid item so we can add using for loop
let container = document.querySelector('.grid-container')

debugger;
// Grid container is set up to divide whole page 16x16 for loop will add that amount of items
for (let i = 0; i < 16 * 16; i++) {

    let gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    container.appendChild(gridItem)
}


