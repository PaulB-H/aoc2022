const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

const splitInput = input.split("\r\n");

const parseString = (string) => {
  switch (string) {
    case "A":
    case "X":
      return "rock";
    case "B":
    case "Y":
      return "paper";
    case "C":
    case "Z":
      return "scissors";
  }
};

const getValue = (string) => {
  switch (string) {
    case "rock":
      return 1;
    case "paper":
      return 2;
    case "scissors":
      return 3;
  }
};

const parseGame = (opponent, player) => {
  if (opponent === player) return getValue(player) + 3;
  else if (opponent === "rock" && player === "scissors")
    return getValue(player);
  else if (opponent === "paper" && player === "rock") return getValue(player);
  else if (opponent === "scissors" && player === "paper")
    return getValue(player);
  else return getValue(player) + 6;
};

let score = 0;
splitInput.forEach((game) => {
  const opponent = parseString(game.charAt(0));
  const player = parseString(game.charAt(2));
  score += parseGame(opponent, player);
});

console.log("Part 1 Solution: " + score);

const calcWinLoseDraw = (char) => {
  switch (char) {
    case "X":
      return "lose";
    case "Y":
      return "draw";
    case "Z":
      return "win";
  }
};

const parseSecondGame = (opponent, winLoseDraw) => {
  if (winLoseDraw === "draw") return getValue(opponent) + 3;
  else if (opponent === "rock") {
    if (winLoseDraw === "win") {
      return getValue("paper") + 6;
    } else {
      return getValue("scissors");
    }
  } else if (opponent === "paper") {
    if (winLoseDraw === "win") {
      return getValue("scissors") + 6;
    } else {
      return getValue("rock");
    }
  } else if (opponent === "scissors") {
    if (winLoseDraw === "win") {
      return getValue("rock") + 6;
    } else {
      return getValue("paper");
    }
  }
};

let part2score = 0;

splitInput.forEach((game) => {
  const opponent = parseString(game.charAt(0));
  const winLoseDraw = calcWinLoseDraw(game.charAt(2));
  part2score += parseSecondGame(opponent, winLoseDraw);
});

console.log("Part 2 Solution: " + part2score);
