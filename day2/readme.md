Day 2

---

Part 1

To decide whose tent gets to be closest to the snack storage, a giant Rock Paper Scissors tournament is already in progress.

One Elf gives you an encrypted strategy guide (your puzzle input)

Your total score is the sum of your scores for each round.

The score for a single round is the score for the shape you selected\
(1 for Rock, 2 for Paper, and 3 for Scissors)

plus the score for the outcome of the round\
(0 if you lost, 3 if the round was a draw, and 6 if you won)

The first column is what your opponent is going to play: A for Rock, B for Paper, and C for Scissors.\
The second column, you reason, must be what you should play in response: X for Rock, Y for Paper, and Z for Scissors.

Example Input:

----input.txt\
B Z\
A X\
C X\
C X\
C Z\
C X\
----END input

Calculate the score you would get if you were to follow the strategy guide.

---

Part 2

---

Anyway, the second column says how the round needs to end:\
X means you need to lose,\
Y means you need to end the round in a draw,\
Z means you need to win.

What would your total score be if everything goes exactly according to your strategy guide?

The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated.
