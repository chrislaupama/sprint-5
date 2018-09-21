for (let number = "#"; number <= "#######"; number+= "#") {
    console.log(number);}

for (let number = 1; number <= 100; number++) {
    let answer = "";
    if (number % 3 == 0) answer += "Fizz";
    if (number % 5 == 0) answer += "Buzz";
    console.log(answer || number);
}


let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);