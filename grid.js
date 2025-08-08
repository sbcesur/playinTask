export class Grid 
{
    words = [];

    constructor(rows, cols, gridElementId) {
    this.rows = rows;
    this.cols = cols;
    this.gridElement = document.getElementById(gridElementId);
    this.grid = []; // 2D array to hold cell elements

    this.cellSize = getComputedStyle(document.documentElement)
                      .getPropertyValue('--cell-size')
                      .trim();

    this.setupGridLayout();
    this.createCells();
    }

  setupGridLayout() {
    this.gridElement.style.gridTemplateColumns = `repeat(${this.cols}, ${this.cellSize})`;
    this.gridElement.style.gridAutoRows = this.cellSize;
  }

  createCells() {
    for (let row = 0; row < this.rows; row++) {
      this.grid[row] = [];
      for (let col = 0; col < this.cols; col++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = "";
        cell.dataset.row = row;
        cell.dataset.col = col;
        this.gridElement.appendChild(cell);
        this.grid[row][col] = cell;
      }
    }
  }

  canPlaceWordHorizontally(posX, posY, word)
  {
    let i = 0;

    while(i < word.wordLength() && this.#isValidPosition(posY, posX) && this.#canPlaceLetter(posY, posX + i, word.getLetter(i)))
    {
      console.log(i +" " + word.getLetter(i));
      i++;
    }


    console.log("i = " + i);
    console.log(word.wordLength());

    return i == word.wordLength();
  }

  canPlaceWordVertically(posX, posY, word)
  {
    let i = 0;

    while(i < word.wordLength() && this.#isValidPosition(posY, posX) && this.#canPlaceLetter(posY + i, posX, word.getLetter(i)))
    {
      console.log(i +" " + word.getLetter(i));
      i++;
    }

    return i == word.wordLength();
  }

  placeWordHorizontally(posX, posY, word)
  {
    for(let i = 0; i < word.wordLength(); i++)
    {
      this.grid[posY][posX + i].textContent = word.getLetter(i);
    }
  }

  placeWordVertically(posX, posY, word)
  {
    for(let i = 0; i < word.wordLength(); i++)
    {
      this.grid[posY + i][posX].textContent = word.getLetter(i);
    }
  }

  #canPlaceLetter(row, col, letter)
  {
    //console.log(grid[])
    return this.grid[row][col].textContent == "" || this.grid[row][col].textContent == letter;
  }

  #isValidPosition(row, col) {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }
}