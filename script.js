let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;

const statusText = document.getElementById("status");
const cells = document.getElementsByClassName("cell");

function makeMove(index) {
  if (board[index] === "" && isGameActive) {
    board[index] = currentPlayer;
    cells[index].innerText = currentPlayer;
    checkResult();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    if (isGameActive) {
      statusText.innerText = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkResult() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  for (let condition of winConditions) {
    let [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      statusText.innerText = `🎉 Player ${board[a]} wins!`;
      isGameActive = false;
      return;
    }
  }

  if (!board.includes("")) {
    statusText.innerText = "It's a Draw!";
    isGameActive = false;
  }
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  isGameActive = true;
  statusText.innerText = `Player ${currentPlayer}'s turn`;
  for (let cell of cells) {
    cell.innerText = "";
  }
}
