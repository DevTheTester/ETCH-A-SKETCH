// Get grid container as variable, create grid item so we can add using for loop
let gridContainer = document.querySelector('.grid-container');
let resizeButton = document.querySelector('.resize');
let sizeInput = 16

// function that takes into account a size so we can use a prompt later to choose how many 
// sides we want our grid to have and have the right amount of items to fill the container up.
function createGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    let gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    gridContainer.appendChild(gridItem)
}};


function addPen() {
  let allGridItems = document.querySelectorAll('.grid-item');
  allGridItems.forEach(item => 
    item.addEventListener('mouseover', () =>
    item.style.backgroundColor = 'black' ));
  }

createGrid(sizeInput);
addPen();

// function to reset color of blocks when clear button clicked
//  has to work for all grid sizes
let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearGrid);

function clearGrid() {
  let allGridItems = document.querySelectorAll('.grid-item');
  allGridItems.forEach(item =>
    item.style.backgroundColor = 'rgb(177, 229, 231)');
  }
// Function to prompt user to select amount of squares per side 
// when resize button is clicked, and change grid accordingly.

// resizeButton.addEventListener('click', () =>
//   allGridItems.forEach(item => item.remove());
//   let newGridItemAmount = prompt("How many squares would you like each side?");
//   console.log(newGridItemAmount);
// )

