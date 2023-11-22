const characterRows = document.querySelectorAll('.row');
let currentRowIndex = 0;
let currentCharacterIndex = 0;

function shuffleCharacters() {
  const nextCharacterIndex =
    (currentCharacterIndex + 1) %
    characterRows[currentRowIndex].children.length;
  const nextRow =
    nextCharacterIndex === 0
      ? (currentRowIndex + 1) % characterRows.length
      : currentRowIndex;

  characterRows[currentRowIndex].appendChild(
    characterRows[currentRowIndex].children[nextCharacterIndex],
  );
  currentRowIndex = nextRow;
  currentCharacterIndex = nextCharacterIndex;
}

setInterval(shuffleCharacters, 3000);

// Get the button element by its ID
const myButton = document.getElementById('myButton');

// Add a click event listener to the button
myButton.addEventListener('click', () => {
  myButton.textContent = 'Button Clicked!';
});
