document.addEventListener("DOMContentLoaded", () => {
    const puzzleContainer = document.querySelector(".puzzle-container");

    const numbers = [...Array(9).keys()].sort(() => Math.random() - 0.5); // Generate numbers 0-8 and shuffle

    numbers.forEach(num => {
        const tile = document.createElement("div");
        tile.textContent = num === 0 ? "" : num; // Leave the tile empty if num is 0
        tile.classList.add("tile");
        puzzleContainer.appendChild(tile);
    });
});
