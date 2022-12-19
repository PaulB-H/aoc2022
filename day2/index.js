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
