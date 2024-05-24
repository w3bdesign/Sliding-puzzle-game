document.addEventListener("DOMContentLoaded", () => {
    const puzzleContainer = document.querySelector(".puzzle-container");

    const numbers = [...Array(9).keys()].sort(() => Math.random() - 0.5); // Generate numbers 0-8 and shuffle

    numbers.forEach(num => {
        const tile = document.createElement("div");
        if (num === 0) {
            tile.classList.add("empty"); // Add empty class to the empty tile
        } else {
            tile.textContent = num;
        }
        tile.classList.add("tile");
        puzzleContainer.appendChild(tile);
    });
});
