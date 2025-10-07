/*

TOOLS:
- for cycle
- if
- else if
- else
- console.log

*/

for (let i = 1; i <= 100; i++) {
// for cycle that goes from 1 to 100
if (i % 15 === 0) {
    console.log("FizzBuzz");
    // if the number is a multiple of 15, the console prints "FizzBuzz"
}

else if (i % 5 === 0) {
    console.log("Buzz");
    // if the number is a multiple of 5, the console prints "Buzz"
}

else if (i % 3 === 0) {
    console.log("Fizz");
    // if the number is a multiple of 3, the console prints "Fizz"
}

else {
    console.log(i);
    // if the number is NOT a multiple of 3,5 or 15, the console prints a number
}
}
