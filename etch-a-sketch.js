const container = document.querySelector("#container");
const square = document.querySelector("#square");
const btn = document.querySelector("#squareSize");
btn.addEventListener("click", activateButton);
const sizeText = document.querySelector("#sizeText");
let currentGridSize = 16;
resizeSquare();
createGrid(currentGridSize);

/**
 * Function: createGrid
 * Params: number size
 * Returns: Nothing
 */
function createGrid(size) {
    let rowDiv;
    let squareDiv;
    for (let i = 1; i <= size; i++) {
        // Create a row
        rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        for (let j = 1; j <= size; j++) {
            squareDiv = document.createElement("div");
            squareDiv.classList.add("individualSquare");
            squareDiv.addEventListener("mouseover", changeSquare);
            rowDiv.appendChild(squareDiv);
        }
        square.appendChild(rowDiv);
    }
    currentGridSize = size;
    return;
}

/**
 * Function: resizeSquare
 * Params: None
 * Returns: nothing
 */
function resizeSquare() {
    let size = screen.height * .75;
    console.log(`Screen height is ${size}`);
    square.style.height = `${size}px`;
    square.style.width = `${size}px`;
}

/**
 * Function: changeSquare
 * Params: event
 * Returns: nothing
 */
function changeSquare(e) {
    currentSquare = e.target;
    currentSquare.style.backgroundColor = "blue";
}

/**
 * Function: activateButton
 * Params: None
 * Returns: Nothing
 */
function activateButton() {
    let newSize = currentGridSize;

    // Prompt user for new size, limit of 100
    while (true) {
        const userChoice = prompt("Select square side size (1-100):");
        if (userChoice == null) {
            return;
        }

        newSize = parseInt(userChoice);
        if ((newSize != NaN) && (newSize >= 1) && (newSize <= 100)) {
            break;
        } else {
            newSize = currentGridSize;
        }
    }

    console.log(newSize);

    // Clear old grid
    square.replaceChildren();

    // Change sizeText
    sizeText.textContent = `${newSize} x ${newSize}`;

    createGrid(newSize);
    return;
}