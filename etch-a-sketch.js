const container = document.querySelector("#container");
const square = document.querySelector("#square");

resizeSquare();
createGrid(16);

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