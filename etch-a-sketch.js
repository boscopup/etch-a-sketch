const container = document.querySelector("#container");
const square = document.querySelector("#square");

container.style = "height: 100%; width: 100%; display: flex; justify-content: center";
square.style = "display: flex; flex-direction: column; border: 2px solid black;"
resizeSquare();

/**
 * Function: createGrid
 * Params: number size
 * Returns: Nothing
 */
function createGrid(size) {
    return;
}

/**
 * Function: resizeSquare
 * Params: None
 * Returns: nothing
 */
function resizeSquare() {
    size = screen.height * .75;
    console.log(`Screen height is ${size}`);
    square.style.height = `${size}px`;
    square.style.width = `${size}px`;
}