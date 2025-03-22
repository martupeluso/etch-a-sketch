const button = document.querySelector("button");

button.addEventListener("click", () => {
    let squaresPerSide;

    do {
        squaresPerSide = prompt("How many squares per side should the grid have? (1-100)");
    } while (squaresPerSide <= 0 || squaresPerSide > 100);

    createGrid(squaresPerSide);
})

const container = document.querySelector(".container");

function createGrid(squares = 16){
    container.textContent = "";

    for (let i = 0; i < (squares ** 2); i++){
        const div = document.createElement("div");
    
        div.style.height = (800 / squares) + "px";
        div.style.width = (800 / squares) + "px";

        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "lightgreen";
        })
    
        container.appendChild(div);
    }
}

createGrid();