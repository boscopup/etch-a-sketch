const container = document.querySelector("#container");
const square = document.querySelector("#square");

container.style = "height: 100%; width: 100%; display: flex; justify-content: center";
square.style = "display: flex; flex-direction: column; border: 2px solid black; justify-content: space-evenly;";
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
        rowDiv.style = "display: flex; flex-direction: row; border: 0; flex-grow: 1;";
        for (let j = 1; j <= size; j++) {
            squareDiv = document.createElement("div");
            squareDiv.style = "flex-grow: 1; border: 2px solid black;";
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