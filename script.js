document.addEventListener("DOMContentLoaded", () => {
  const puzzleContainer = document.querySelector(".puzzle-container");

  const numbers = [...Array(9).keys()].sort(() => Math.random() - 0.5); // Generate numbers 0-8 and shuffle

  function isAdjacent(tile1, tile2) {
    const tile1Index = Array.prototype.indexOf.call(
      puzzleContainer.children,
      tile1
    );
    const tile2Index = Array.prototype.indexOf.call(
      puzzleContainer.children,
      tile2
    );

    const tile1Row = Math.floor(tile1Index / 3);
    const tile1Col = tile1Index % 3;
    const tile2Row = Math.floor(tile2Index / 3);
    const tile2Col = tile2Index % 3;

    return Math.abs(tile1Row - tile2Row) + Math.abs(tile1Col - tile2Col) === 1;
  }

  function swapTiles(tile1, tile2) {
    const temp = document.createElement("div");
    puzzleContainer.insertBefore(temp, tile1);
    puzzleContainer.insertBefore(tile1, tile2);
    puzzleContainer.insertBefore(tile2, temp);
    puzzleContainer.removeChild(temp);
  }

  numbers.forEach((num) => {
    const tile = document.createElement("div");
    if (num === 0) {
      tile.classList.add("empty"); // Add empty class to the empty tile
    } else {
      tile.textContent = num;
    }
    tile.classList.add("tile");
    tile.addEventListener("click", () => {
      const emptyTile = document.querySelector(".tile.empty");
      if (isAdjacent(tile, emptyTile)) {
        const emptyTileRect = emptyTile.getBoundingClientRect();
        const tileRect = tile.getBoundingClientRect();

        const deltaX = emptyTileRect.left - tileRect.left;
        const deltaY = emptyTileRect.top - tileRect.top;

        tile.style.transition = "transform 0.2s ease-in-out";
        emptyTile.style.transition = "transform 0.2s ease-in-out";

        tile.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        emptyTile.style.transform = `translate(${-deltaX}px, ${-deltaY}px)`;

        tile.addEventListener("transitionend", function handler() {
            tile.style.transform = "";
            emptyTile.style.transform = "";

            const temp = document.createElement("div");
            puzzleContainer.insertBefore(temp, tile);
            puzzleContainer.insertBefore(tile, emptyTile);
            puzzleContainer.insertBefore(emptyTile, temp);
            puzzleContainer.removeChild(temp);

            tile.removeEventListener("transitionend", handler);
        });
      }
    });

    if (num === 0) {
      tile.classList.add("empty"); // Add empty class to the empty tile
    } else {
      tile.textContent = num;
    }
    tile.classList.add("tile");
    puzzleContainer.appendChild(tile);
  });
});
