# Type 'string[]' is not assignable to type 'string' in TypeScript

This repository demonstrates a common TypeScript error: assigning an array of strings to a variable expecting a single string.

The `bug.ts` file contains the erroneous code. The `bugSolution.ts` file provides a corrected version.

## Bug Description
The TypeScript compiler throws an error because the `greeter` function expects a single string argument, but it receives an array of strings. 

## Solution
The solution involves modifying the function to either accept an array of strings or handle single strings as expected.