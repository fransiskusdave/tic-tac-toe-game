let btnRef = document.querySelectorAll(".button-option");
const popup = document.querySelector(".popup");
const newGameBtn = document.getElementById("new-game");
const restartBtn = document.getElementById("restart");
const msgRef = document.querySelector(".message");

// Winning Pattery
const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

// Player "X" play first
let xTurn = true;
let count = 0;

// Display X/O on click
btnRef.forEach((e) => {
  e.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      // Display X
      e.innerText = "X";
      e.disabled = true;
    } else {
      xTurn = "true";
      // Display O
      e.innerText = "O";
      e.disabled = true;
    }

    // Increment count
    count++;
    if (count === 9) {
      // Draw
      draw();
    }

    // Winner check
    winChecker();
  });
});

// Win checker function
function winChecker() {
  for (let i of winningPattern) {
    let [e1, e2, e3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];

    if (e1 != "" && e2 != "" && e3 != "") {
      if (e1 == e2 && e2 == e3) {
        winFunction(e1);
      }
    }
  }
}

// Win function
function winFunction(letter) {
  disabledButtons();
  letter == "X"
    ? (msgRef.innerHTML = `&#x1F389; <br> 'X' Win`)
    : (msgRef.innerHTML = `&#x1F389; <br> 'X' Win`);
}

// Disable all buttons
function disabledButtons() {
  btnRef.forEach((e) => (e.disabled = true));
  // Enable popup
  popup.classList.remove("hide");
}

// Enable all buttons
function enableButtons() {
  btnRef.forEach((e) => {
    e.innerText = "";
    e.disabled = false;
  });
  // disable popup
  popup.classList.add("hide");
}

// New game function
newGameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

// Restart function
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

// Draw Function
function draw() {
  disabledButtons();
  msgRef.innerHTML = `&#x1F60E; <br> It's a draw`;
}

// Enable buttons and disabled popup on page load
window.onload = enableButtons();
