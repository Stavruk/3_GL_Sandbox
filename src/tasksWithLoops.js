// Task 1 - find sum of all number in 2 arrays
// const arrayNums1 = [7,101,3,1,9,11,100,111] // 343
// const arrayNums2 = [90,101,3,1,69,11,10,111] // 396
// 343 + 396
export function sumNumsInArrays(array1, array2) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < array1.length; i++) {
    sum1 = sum1 + array1[i];
  }
  for (let i = 0; i < array2.length; i++) {
    sum2 = sum2 + array2[i];
  }
  return sum1 + sum2;
}

// Task 2 - Using a 'for' loop print all even
// numbers up to and including n, as a comma separated string.
// Don’t include 0
// const n = 20;
// Example output:
// "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"

export function printEvenNumbers(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      res.push(i);
    }
  }
  return res;
}

// Task 3 - Using a 'for' loop output the elements in reverse order
// const arr = [
//   43, "what", 9, true, "cannot", false, "be", 3, true
// ];
export function reverseArrayItems(array) {}

// Task 4 - Add up each element in the same position and
// create a new array containing the sum of each pair.
// Assume both arrays are of the same length.
// let array1   = [4, 6, 7];
// let array2  = [8, 1, 9];
// Example output:
// [12, 7, 16]
export function sumNumsSamePosition(array1, array2) {}

// Task 5 - find sum of all number in array using 'while' loop
export function sumNums(array) {}

// Task 6 - filter array of string using 'for' or 'while' loop
// and keep only elements where length > 4 and without the word 'error'
// const strArr = ['error01', 'in a galaxy', 'start-error', far far', 'away', '0994-error']
export function filterArrayWithStrings(array) {}

// Task 7 - given a number n calculate the factorial of
// the number using 'for' or 'while' loop
// n! => 1*2*3*4*5
export function factorial(n) {}
