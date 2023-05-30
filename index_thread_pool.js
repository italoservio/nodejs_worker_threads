const {cpus} = require('node:os');
const Pool = require('worker-threads-pool');
const {reference, generateFakeData, programs} = require('./common');

const main = () => {
    console.time('Elapsed');
    console.log('Total programs: %s', programs.length);

    const workers = [];
    const qtyWorkers = cpus().length;
    const qtyProgramsByWorker = programs.length / qtyWorkers;
    const pool = new Pool({max: qtyWorkers});

    for (let i = 0; i < qtyWorkers; i++) {
        const qty = Math.ceil(qtyProgramsByWorker);
        const workerData = {reference, programs: programs.splice(0, qty)};

        workers.push(new Promise((res, rej) => {
            pool.acquire('./match_percentage.js', {workerData}, (err, worker) => {
                if (err) rej(err);
                worker.on('message', res);
                worker.on('error', rej);
                worker.on('exit', (code) => {
                    if (code !== 0)
                        rej(new Error(`Worker stopped with exit code ${code}`));
                });
            });
        }));
    }

    Promise.all(workers)
        .then(options => {
            console.log(options.flat());
            console.timeEnd('Elapsed');
        })
        .catch(err => console.error(err));
};

generateFakeData(900000);

// Forcing a perfect match
programs.push({
    title: 'Folks',
    releaseYear: '1992',
});

main();
