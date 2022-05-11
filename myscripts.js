// Get grid container as variable, create grid item so we can add using for loop
let gridContainer = document.querySelector('.grid-container');
let clearButton = document.querySelector('.clear');
let resizeButton = document.querySelector('.resize');

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

// function to reset color of blocks when clear button clicked
//  has to work for all grid sizes

clearButton.addEventListener('click', () =>
  allGridItems.forEach(item =>
    item.style.backgroundColor = 'rgb(177, 229, 231)'));

// Function to prompt user to select amount of squares per side 
// when resize button is clicked, and change grid accordingly.

// resizeButton.addEventListener('click', () =>
//   allGridItems.forEach(item => item.remove());
//   let newGridItemAmount = prompt("How many squares would you like each side?");
//   console.log(newGridItemAmount);
// )

