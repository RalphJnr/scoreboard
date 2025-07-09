let homeScoreEl = document.querySelector(".home-score");
let guestScoreEl = document.querySelector(".guest-score");
let homeScore = 0;
let guestScore = 0;

function homeAddOne() {
  let result = homeScore + 1;
  homeScore += 1;
  homeScoreEl.textContent = result;
}

function homeAddTwo() {
  let result = homeScore + 2;
  homeScore += 2;
  homeScoreEl.textContent = result;
}

function homeAddThree() {
  let result = homeScore + 3;
  homeScore += 3;
  homeScoreEl.textContent = result;
}

function guestAddOne() {
  let result = guestScore + 1;
  guestScore += 1;
  guestScoreEl.textContent = result;
}

function guestAddTwo() {
  let result = guestScore + 2;
  guestScore += 2;
  guestScoreEl.textContent = result;
}

function guestAddThree() {
  let result = guestScore + 3;
  guestScore += 3;
  guestScoreEl.textContent = result;
}

function restart() {
  homeScore = 0;
  guestScore = 0;

  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = homeScore;
}
