let homeScoreNum = 0;
let guestScoreNum = 0;

let homeScoreText = document.getElementById("home-score-text");
let guestScoreText = document.getElementById("guest-score-text");

function updateScore(n, team) {
    if (team === "h") {
        homeScoreNum += n;
        homeScoreText.textContent = homeScoreNum;
    } else {
        guestScoreNum += n;
        guestScoreText.textContent = guestScoreNum;
    }

    if (homeScoreNum > guestScoreNum) {
        homeScoreText.style.boxShadow = "0 0 2px 5px #F94F6D";
        guestScoreText.style.boxShadow = "none";
    } else if (guestScoreNum > homeScoreNum) {
        guestScoreText.style.boxShadow = "0 0px 2px 5px #F94F6D";
        homeScoreText.style.boxShadow = "none";
    } else {
        homeScoreText.style.boxShadow = "none";
        guestScoreText.style.boxShadow = "none";
    }
}

function startNewGame() {
    homeScoreText.style.boxShadow = "none";
    guestScoreText.style.boxShadow = "none";
    homeScoreNum = 0;
    guestScoreNum = 0;
    homeScoreText.textContent = 0;
    guestScoreText.textContent = 0;
}
