const readline = require("node:readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("I'm thinking of a number from 1 to 100.");

function askForGuess() {
  input.question("Enter your guess: ", (value) => {
    const guess = Number(value.trim());

    if (!Number.isInteger(guess)) {
      console.log("Please enter a whole number.");
      askForGuess();
      return;
    }

    if (guess < 1 || guess > 100) {
      console.log("Please enter a number from 1 to 100.");
      askForGuess();
      return;
    }

    attempts += 1;

    if (guess < answer) {
      console.log("Too low!");
      askForGuess();
    } else if (guess > answer) {
      console.log("Too high!");
      askForGuess();
    } else {
      console.log(`Correct! You guessed the number in ${attempts} attempts.`);
      input.close();
    }
  });
}

askForGuess();