function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // This will print numbers from 1 to 10

function printEvenNumbers(n: number): void {
  for (let i = 2; i <= n; i += 2) {
    console.log(i);
  }
}

printEvenNumbers(10); // This will print even numbers from 2 to 10

function printOddNumbers(n: number): void {
  for (let i = 1; i <= n; i += 2) {
    console.log(i);
  }
}

printOddNumbers(10); // This will print odd numbers from 1 to 9