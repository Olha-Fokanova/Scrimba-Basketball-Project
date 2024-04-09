let homeBoard = document.getElementById("home-count-box");
let guestBoard = document.getElementById("guest-count-box");
let result = document.getElementById("result");
let homeCount = 0;
let guestCount = 0;

function plusOneHome() {
  homeCount += 1;
  homeBoard.textContent = homeCount;
}

function plusTwoHome() {
  homeCount += 2;
  homeBoard.textContent = homeCount;
}

function plusThreeHome() {
  homeCount += 3;
  homeBoard.textContent = homeCount;
}

function plusOneGuest() {
  guestCount += 1;
  guestBoard.textContent = guestCount;
}

function plusTwoGuest() {
  guestCount += 2;
  guestBoard.textContent = guestCount;
}

function plusThreeGuest() {
  guestCount += 3;
  guestBoard.textContent = guestCount;
}

function reset() {
  homeCount = 0;
  guestCount = 0;
  guestBoard.textContent = guestCount;
  homeBoard.textContent = homeCount;
  result.textContent = "";
}

function callWinner() {
  if (homeCount > guestCount) {
    result.textContent = "Congratulations to the Home team!";
  } else if (guestCount > homeCount) {
    result.textContent = "Congratulations to the Guest team!";
  } else {
    result.textContent = "Draw";
  }
}
