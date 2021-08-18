function min_to_sec(min) {
  return min * 60;
}

const prompt = require("prompt-sync")();
console.log("Seconds: " + min_to_sec(parseInt(prompt("Mins: "))))
