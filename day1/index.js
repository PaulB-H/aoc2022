const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

const splitInput = input.split("\r\n");

const arrayOfInventories = [];
let trackingArr = [];

splitInput.forEach((string) => {
  if (string !== "") {
    trackingArr.push(parseInt(string));
  } else {
    arrayOfInventories.push(trackingArr);
    trackingArr = [];
  }
});

let scores = [];

arrayOfInventories.forEach((inventory) => {
  let currentTotal = 0;
  inventory.forEach((item) => {
    currentTotal += item;
  });
  scores.push(currentTotal);
});

scores.sort((a, b) => a - b);

const part1solution = scores[scores.length - 1];

console.log("Part 1 Solution: " + part1solution);

/** Part 2 */

const part2solution =
  scores[scores.length - 1] +
  scores[scores.length - 2] +
  scores[scores.length - 3];

console.log("Part 2 Solution: " + part2solution);
