const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');

describe('Text Analyzer Tests', () => {

    test('counts words', () => {
        expect(countWords('Hello world')).toBe(2);
    });

    test('finds longest word', () => {
        expect(findLongestWord('cat elephant dog')).toBe('elephant');
    });

    test('counts lines', () => {
        expect(countLines('line1\nline2\nline3')).toBe(3);
    });

    test('empty text', () => {
        expect(countWords('')).toBe(0);
        expect(findLongestWord('')).toBe('');
        expect(countLines('')).toBe(0);
    });

});
