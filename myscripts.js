// creates grid filled with perfect squares, takes size parameter to divide up the square and fil it evenly.
let gridContainer = document.querySelector('.grid-container');

function createGrid(size) {
  clearGrid()
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    let gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    gridContainer.appendChild(gridItem)
}};

// When mouse passes over a square it will change color to black.
function addPen() {
  let allGridItems = document.querySelectorAll('.grid-item');
  allGridItems.forEach(item => 
    item.addEventListener('mouseover', () =>
    item.style.backgroundColor = 'black' ));
  }

// Clears black squares
function clearGrid() {
  let allGridItems = document.querySelectorAll('.grid-item');
  allGridItems.forEach(item =>
    item.style.backgroundColor = 'rgb(177, 229, 231)');
  }

// Checks if input is legit.
function takeUserSize() {
  let userInput = prompt('How many squares each side? - Maximum 100.');
  if (isNaN(userInput)) {
    alert('Input must be a number.');
    return false;
  }
  else if (userInput > 100) {
    alert('Input must not exceed 100.')
    return false;
  }
  else if (userInput <= 0) {
  alert('Input must be greater than 0.')
  return false;
  }
  else {return userInput}
}

createGrid(16);
addPen();

let resizeButton = document.querySelector('.resize');
resizeButton.addEventListener('click', () => createGrid(takeUserSize()));
resizeButton.addEventListener('click', addPen);

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearGrid);

