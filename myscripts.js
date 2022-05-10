// Get grid container as variable, create grid item so we can add using for loop
let gridContainer = document.querySelector('.grid-container');

// Grid container is set up to divide whole page 16x16 for loop will add that amount of items
for (let i = 0; i < 16 * 16; i++) {
   let gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    gridContainer.appendChild(gridItem)
};

let allGridItems = document.querySelectorAll('.grid-item');

// Get grid item to change color when hovered over
// and change back when mouse isn't over

allGridItems.forEach(item => 
    item.addEventListener('mouseover', () =>
    item.style.backgroundColor = 'black' ));


