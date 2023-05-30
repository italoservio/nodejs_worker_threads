const dayjs = require('dayjs');
const {parentPort, workerData, threadId} = require('node:worker_threads');
const {MINIMUM_MATCH_PERCENTAGE, stringMatchPercentage} = require('./common');

const job = ({reference, programs}) => {
    let verified = 0;
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

        verified++;
    }

    console.log(`Worker %s, verified %s items and found %s matches`,
        threadId,
        verified,
        options.length
    );

    parentPort.postMessage(options);
};

job(workerData);
