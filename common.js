const {faker} = require('@faker-js/faker');

const reference = {
    title: 'Folks',
    releaseDate: '1992-01-01',
};

const programs = [{
    title: 'The Folks',
    releaseYear: '2022',
}, {
    title: 'Folks!',
    releaseYear: '1992',
}, {
    title: 'Church Folks',
    releaseYear: '2020',
}, {
    title: 'Only the Folks',
    releaseYear: '2014',
}];

const generateFakeData = (num = 1000) => {
    Array(num).fill(0).forEach(() => {
        programs.push({
            title: faker.word.words(faker.number.int({min: 1, max: 3})),
            releaseYear: faker.date.birthdate({min: 1900, max: 2023, mode: 'year'}),
        });
    });
};

const MINIMUM_MATCH_PERCENTAGE = 75;

const normalize = (str) => str
    ?.toLocaleLowerCase()
    ?.normalize("NFD")
    ?.replace(/[\u0300-\u036f]/g, "");

/* 
 * Levenshtein Distance algorithm with percentage criteria
 * Ref.: https://www.30secondsofcode.org/js/s/levenshtein-distance/
 */
const stringMatchPercentage = (str1 = '', str2 = '') => {
    if (!str1.length) return str2.length;
    if (!str2.length) return str1.length;

    const arr = [];
    for (let i = 0; i <= str2.length; i++) {
        arr[i] = [i];
        for (let j = 1; j <= str1.length; j++) {
            const indicator = normalize(str1[j - 1]) === normalize(str2[i - 1])
                ? 0
                : 1;

            arr[i][j] = i === 0
                ? j
                : Math.min(
                    arr[i - 1][j] + 1,
                    arr[i][j - 1] + 1,
                    arr[i - 1][j - 1] + indicator
                );
        }
    }

    const distance = arr[str2.length][str1.length];
    return 100 - (distance * 100 / str2.length);
};

module.exports = {
    programs,
    reference,
    generateFakeData,
    stringMatchPercentage,
    MINIMUM_MATCH_PERCENTAGE
};
