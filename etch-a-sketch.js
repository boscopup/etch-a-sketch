const container = document.querySelector("#container");
const square = document.querySelector("#square");
const btn = document.querySelector("#squareSize");
btn.addEventListener("click", activateButton);
const sizeText = document.querySelector("#sizeText");
let currentGridSize = 16;
resizeSquare();
createGrid(currentGridSize);
window.addEventListener("resize", resizeSquare);

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
    let size;
    // For portrait orientated devices, use 90% of width as the square size (mobile phones, etc.).
    // For landscape orienteed devices, use 75% of the height as the square size.
    if (screen.orientation.type == "portrait-primary" || screen.orientation.type == "portrait-secondary") {
        size = document.documentElement.clientWidth * .9;
    } else {
        size = document.documentElement.clientHeight * .75;
    }
    square.style.height = `${size}px`;
    square.style.width = `${size}px`;
}

/**
 * Function: changeSquare
 * Params: event
 * Returns: nothing
 */
function changeSquare(e) {
    const currentSquare = e.target;
    let opacity = +currentSquare.style.opacity;
    if (opacity == 0) {
        currentSquare.style.backgroundColor = randomColorGenerator();
    }
    if (opacity < 1) {
        opacity += 0.1;
        opacity = Math.round(opacity * 10)/10;
    } else {
        return;
    }
    currentSquare.style.opacity = opacity;

}

/**
 * Function: randomColorGenerator
 * Params: None
 * Returns: string rgb color
 */
function randomColorGenerator() {
    const r = randomNum();
    const g = randomNum();
    const b = randomNum();
    return (`rgb(${r},${g},${b})`);
}

/**
 * Function: randomNum
 * Params: None
 * Returns: number between 0-255
 */
function randomNum() {
    return Math.floor(Math.random() * 256);
}

/**
 * Function: extractTransparency
 * Params: string rgbaValue
 * Returns: number
 */
function extractTransparency(rgbaValue) {
    // rgbaValue is of the format rgba(###,###,###,#.#)
    return +rgbaValue.substr(-4,3);
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

    // Clear old grid
    square.replaceChildren();

    // Change sizeText
    sizeText.textContent = `${newSize} x ${newSize}`;

    createGrid(newSize);
    return;
}