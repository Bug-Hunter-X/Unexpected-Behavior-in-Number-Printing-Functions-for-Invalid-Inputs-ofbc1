# TypeScript Bug: Unexpected Behavior in Number Printing Functions

This repository demonstrates a bug in a simple TypeScript program designed to print numbers, even numbers, and odd numbers up to a specified limit. The functions lack input validation which leads to unexpected or incorrect output when provided with non-positive or non-integer values.

## Bug Description
The `printNumbers`, `printEvenNumbers`, and `printOddNumbers` functions are designed to iterate and print numbers based on specific conditions.  However, they don't handle edge cases such as negative input or non-integer input, leading to potential errors or unexpected results. 

## How to Reproduce
1. Clone the repository.
2. Compile and run the `bug.ts` file using a TypeScript compiler (tsc) and a Node.js runtime (node).
3. Test the functions with various inputs, including positive integers, negative integers, floating-point numbers, and zero to observe the unexpected behavior.

## Solution
The solution involves adding input validation to handle various scenarios and provide a more robust solution. The improved code is available in `bugSolution.ts`.