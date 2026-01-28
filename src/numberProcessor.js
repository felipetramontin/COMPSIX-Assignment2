const fs = require('fs');

// Turn text into numbers
function parseNumbers(text) {
    let lines = text.split('\n');
    let numbers = [];

    for (let i = 0; i < lines.length; i++) {
        let value = lines[i].trim();

        if (value !== '') {
            numbers.push(parseFloat(value));
        }
    }

    return numbers;
}

// Add numbers
function calculateSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

// Find smallest and biggest
function findMin(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return min;
}

function findMax(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

// Find average
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let sum = calculateSum(numbers);
    return sum / numbers.length;
}

// Run if file executed directly
if (require.main === module) {
    const content = fs.readFileSync('./data/sample-numbers.txt', 'utf8');
    const numbers = parseNumbers(content);

    console.log("Sum:", calculateSum(numbers));
    console.log("Min:", findMin(numbers));
    console.log("Max:", findMax(numbers));
    console.log("Average:", calculateAverage(numbers));
}

module.exports = { parseNumbers, calculateSum, findMin, findMax, calculateAverage };
