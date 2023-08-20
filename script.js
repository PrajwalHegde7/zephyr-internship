function sumOfArray(arr) {
    var sum = 0;
    arr.forEach((element) => (sum += element));
    return sum;
}
console.log(sumOfArray([1, 2, 3, 4, 5, 6]));
console.log(sumOfArray([12, 32, 32, 43, 65, 16]));
console.log(sumOfArray([21, 72, 33, 44, -45, 56]));

function findMaxValue(numbers) {
    // Your code here
    var max = numbers[0];
    numbers.forEach((num) => (max < num ? (max = num) : null));
    return max;
}
// Example usage
console.log(findMaxValue([5, 9, 2, 6, 3])); // Output: 9
console.log(findMaxValue([-10, -5, -2, -8])); // Output: -2
console.log(findMaxValue([100, 87, 92, 105])); // Output: 105

function countEvenNumbers(numbers) {
    // Your code here
    var count = 0;
    numbers.forEach((num) => (num % 2 == 0 ? count++ : null));
    return count;
}
// Example usage
console.log(countEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 3
console.log(countEvenNumbers([10, 21, 32, 45])); // Output: 2
console.log(countEvenNumbers([7, 9, 11, 13])); // Output: 0
