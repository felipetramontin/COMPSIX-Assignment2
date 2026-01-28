const fs = require('fs');

// Count total words
function countWords(text) {
    if (text === '' || text === undefined) {
        return 0;
    }

    let words = text.split(' ');
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].trim() !== '') {
            count++;
        }
    }

    return count;
}

// Find longest word
function findLongestWord(text) {
    if (text === '' || text === undefined) {
        return '';
    }

    let words = text.split(' ');
    let longest = '';

    for (let i = 0; i < words.length; i++) {
        let word = words[i].trim();

        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

// Count number of lines
function countLines(text) {
    if (text === '' || text === undefined) {
        return 0;
    }

    let lines = text.split('\n');
    return lines.length;
}

// Run if file is executed directly
if (require.main === module) {
    const content = fs.readFileSync('./data/sample-text.txt', 'utf8');

    console.log("Words:", countWords(content));
    console.log("Longest word:", findLongestWord(content));
    console.log("Lines:", countLines(content));
}

module.exports = { countWords, findLongestWord, countLines };
