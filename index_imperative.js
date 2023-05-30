const dayjs = require('dayjs');
const {
    programs,
    reference,
    generateFakeData,
    stringMatchPercentage,
    MINIMUM_MATCH_PERCENTAGE,
} = require('./common');

const main = () => {
    console.time('Elapsed');
    console.log('Total programs: %s', programs.length);

    const options = [];
    for (const program of programs) {
        const titleMatchPercentage = stringMatchPercentage(
            reference.title,
            program.title,
        );

        if (
            titleMatchPercentage >= MINIMUM_MATCH_PERCENTAGE &&
            dayjs(reference.releaseDate).year() === dayjs(program.releaseYear).year()
        ) {
            options.push(program);
        }
    }

    console.log(`Verified %s items and found %s matches`,
        programs.length,
        options.length
    );

    console.log(options);
    console.timeEnd('Elapsed');
};

generateFakeData(900000);

// Forcing a perfect match
programs.push({
    title: 'Folks',
    releaseYear: '1992',
});

main();
