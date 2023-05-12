// build a rock paper scissors game and save it to github

function startGame(userChoice) {
  let choice = ["Rock", "Paper", "Scissors"];
  let computerChoice = choice[Math.floor(Math.random() * choice.length)];

  if (userChoice == "Rock" && computerChoice == "Scissors") {
    document.getElementById("compTurn").innerHTML = computerChoice;
    document.getElementById("userTurn").innerHTML = userChoice;
    document.getElementById("result").innerHTML = "You Win!";
  } else if (userChoice == "Scissors" && computerChoice == "Paper") {
    document.getElementById("compTurn").innerHTML = computerChoice;
    document.getElementById("userTurn").innerHTML = userChoice;
    document.getElementById("result").innerHTML = "You Win!";
  } else if (userChoice == "Paper" && computerChoice == "Rock") {
    document.getElementById("compTurn").innerHTML = computerChoice;
    document.getElementById("userTurn").innerHTML = userChoice;
    document.getElementById("result").innerHTML = "You Win!";
  } else {
    document.getElementById("result").innerHTML = "You Lose!";
  }
}
