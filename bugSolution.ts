function printNumbers(n: number): void {
  if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
    console.error("Invalid input: n must be a positive integer.");
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // This will print numbers from 1 to 10
printNumbers(-5); //This will print an error message
printNumbers(5.5); //This will print an error message

function printEvenNumbers(n: number): void {
  if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
    console.error("Invalid input: n must be a positive integer.");
    return;
  }
  for (let i = 2; i <= n; i += 2) {
    console.log(i);
  }
}

printEvenNumbers(10); // This will print even numbers from 2 to 10
printEvenNumbers(-5); //This will print an error message
printEvenNumbers(5.5); //This will print an error message

function printOddNumbers(n: number): void {
  if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
    console.error("Invalid input: n must be a positive integer.");
    return;
  }
  for (let i = 1; i <= n; i += 2) {
    console.log(i);
  }
}

printOddNumbers(10); // This will print odd numbers from 1 to 9
printOddNumbers(-5); //This will print an error message
printOddNumbers(5.5); //This will print an error message