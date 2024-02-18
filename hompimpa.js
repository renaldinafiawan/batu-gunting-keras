//Pseudocode dulu ya bre, disini kita bakal bikin game hompimpa dengan JS
//Nah, Logikanya, ada 3 pilihan, batu-gunting-kertas
//

// Buat dulu pilihan buat si Komputer

// Kan ada 3 kondisi,  Menang,  Kalah, Draw
// Jika pilihan sama = Draw
// x1 = user , x2= computer
// x1 = batu DAN x2=gunting
// x1 = kertas DAN x2= batu
// x1 = gunting DAN x2 = kertas
// MAKA,  X1 MENANG dengan logika diatas
// Jika tidak, maka kalah.

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  const result = document.querySelector("#result");

  if (playerSelection === computerSelection) {
    result.textContent = "Draw";
  } else if (
    (playerSelection === "batu" && computerSelection === "gunting") ||
    (playerSelection === "gunting" && computerSelection === "kertas") ||
    (playerSelection === "kertas" && computerSelection === "batu")
  ) {
    result.textContent =
      "Anda, karena anda menggunakan" +
      " " +
      playerSelection +
      " " +
      " Dan PC menggunakan" + "  "+
      computerSelection;
  } else {
    result.textContent =
      "PC, karena anda menggunakan" +
      " " +
      playerSelection +
      " " +
      " Dan PC menggunakan   " +
      computerSelection;
  }
}
function computerPlay() {
  const choices = ["batu", "kertas", "gunting"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const selection = document.querySelectorAll("button");

selection.forEach((button) => {
  let playerSelection = "";
  button.addEventListener("click", function () {
    const computerSelection = computerPlay();
    if (button.id === "batu") {
      playerSelection = "batu";
    } else if (button.id === "gunting") {
      playerSelection = "gunting";
    } else if (button.id === "kertas") {
      playerSelection = "kertas";
    }
    playRound(playerSelection, computerSelection);
  });
});
