const dimensions = 36;

document.addEventListener("DOMContentLoaded", () => {
  const panel = document.querySelector(".panel");
  const pixels = [];

  const pixelState = Array(dimensions)
    .fill()
    .map(() => Array(dimensions).fill(false));

  for (let row = 0; row < dimensions; row++) {
    for (let col = 0; col < dimensions; col++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");

      pixel.dataset.row = row;
      pixel.dataset.col = col;

      panel.appendChild(pixel);

      pixel.addEventListener("click", function () {
        const row = Number.parseInt(this.dataset.row);
        const col = Number.parseInt(this.dataset.col);

        this.classList.toggle("on");

        pixelState[row][col] = this.classList.contains("on");
      });

      pixels.push(pixel);
    }
  }

  function printState() {
    const activePixels = [];

    for (let row = 0; row < dimensions; row++) {
      for (let col = 0; col < dimensions; col++) {
        if (pixelState[row][col]) {
          activePixels.push({ row: row, col: col });
        }
      }
    }

    console.log("Pixel state:");
    console.log(activePixels);
  }

  function getPixelElement(row, col) {
    return pixels[row * dimensions + col];
  }

  function clearAll() {
    for (pixel of pixels) {
      pixel.classList.remove("on");
    }

    for (let row = 0; row < dimensions; row++) {
      for (let col = 0; col < dimensions; col++) {
        pixelState[row][col] = false;
      }
    }
  }

  function drawHappyFace() {
    clearAll();

    for (coordinates of happyFace) {
      const pixel = getPixelElement(coordinates.row, coordinates.col);
      pixel.classList.toggle("on");

      pixelState[coordinates.row][coordinates.col] = true;
    }
  }

  function drawAngryFace() {
    clearAll();

    for (coordinates of angryFace) {
      const pixel = getPixelElement(coordinates.row, coordinates.col);
      pixel.classList.toggle("on");

      pixelState[coordinates.row][coordinates.col] = true;
    }
  }

  function drawMustacheFace() {
    clearAll();

    for (coordinates of mustacheFace) {
      const pixel = getPixelElement(coordinates.row, coordinates.col);
      pixel.classList.toggle("on");

      pixelState[coordinates.row][coordinates.col] = true;
    }
  }

  document.querySelector("#happy").addEventListener("click", drawHappyFace);
  document.querySelector("#angry").addEventListener("click", drawAngryFace);
  document
    .querySelector("#mustache")
    .addEventListener("click", drawMustacheFace);
  document.querySelector("#print").addEventListener("click", printState);
  document.querySelector("#clear").addEventListener("click", clearAll);
});
