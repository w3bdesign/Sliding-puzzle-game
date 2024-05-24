document.addEventListener("DOMContentLoaded", () => {
    const puzzleContainer = document.querySelector(".puzzle-container");

    for (let i = 1; i <= 9; i++) {
        const tile = document.createElement("div");
        tile.textContent = i === 9 ? "" : i; // Leave the last tile empty
        tile.classList.add("tile");
        puzzleContainer.appendChild(tile);
    }
});
