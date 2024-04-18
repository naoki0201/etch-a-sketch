const GRIDSIDE = 600;
let squarePerSide = 16;

const sketchArea = document.querySelector('#sketch-area');
// console.log(sketchArea);

const sliderContainer = document.querySelector('#slider-container');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');

sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;

function setBackgroundColor(){
    this.style.backgroundColor = "black";

}

function  createGridCells(squarePerSide){
    const numOfSquares = (squarePerSide * squarePerSide);
    const widthOrHeight = `${(GRIDSIDE / squarePerSide)-2}px`
    for (i = 0; i < numOfSquares; i++) {
        const gridCell = document.createElement('div');

        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", setBackgroundColor);

    }

}

function removeGridCells(){
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }

}

// テンプレートリテラルの書き方 ${式}の書き方 式全体を`で囲うこと
// コメントアウトはCommand + スラッシュ
// バッククォートは、Shift + @ ```````

slider.oninput = function () {
    let txt = `${this.value} X ${this.value}(Resolution)`;
    sliderValue.innerHTML = txt;
    removeGridCells();
    createGridCells(this.value);
}

createGridCells(16);
