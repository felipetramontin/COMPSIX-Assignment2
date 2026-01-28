const { parseNumbers, calculateSum, findMin, findMax, calculateAverage } = require('../src/numberProcessor');

describe('Number Processor Tests', () => {

    const text = "5\n10\n15";

    test('parses numbers', () => {
        expect(parseNumbers(text)).toEqual([5, 10, 15]);
    });

    test('calculates sum', () => {
        expect(calculateSum([5, 10, 15])).toBe(30);
    });

    test('finds lowest number', () => {
        expect(findMin([5, 10, 15])).toBe(5);
    });

    test('finds highest number', () => {
        expect(findMax([5, 10, 15])).toBe(15);
    });

    test('calculates average', () => {
        expect(calculateAverage([5, 10, 15])).toBe(10);
    });

});
