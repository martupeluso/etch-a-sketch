const button = document.querySelector("button");

button.addEventListener("click", () => {
    let squaresPerSide;

    do {
        squaresPerSide = prompt("How many squares per side should the grid have? (1-100)");
    } while (squaresPerSide <= 0 || squaresPerSide > 100);

    createGrid(squaresPerSide);
})

const grid = document.querySelector(".grid");

function createGrid(squares = 16){
    grid.textContent = "";

    for (let i = 0; i < (squares ** 2); i++){
        const div = document.createElement("div");
    
        div.style.height = (750 / squares) + "px";
        div.style.width = (750 / squares) + "px";

        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = generateRandomHSLColor();
        })
    
        grid.appendChild(div);
    }
}

function generateRandomHSLColor(){
    const hue = Math.round((Math.random() * 360) + 1);
    // Default saturation and light values are there to create a pastel-looking color!
    return `hsl(${hue}, 100%, 80%)`;
}

createGrid();