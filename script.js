const button = document.querySelector("button");

button.addEventListener("click", () => {
    let squaresPerSide;
    do {
        squaresPerSide = prompt("How many squares per side should the grid have? (1-100)");
    } while (squaresPerSide <= 0 || squaresPerSide > 100);
})

const container = document.querySelector(".container");

for (let i = 0; i < 256; i++){
    const div = document.createElement("div");

    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "lightgreen";
    })

    container.appendChild(div);
}