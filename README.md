## Results

### Machine description
```
- Intel Core i5 11400F 2.6~4.40GHz (6 Cores / 12 Threads)
- 32GB DDR4 3200MHz
```

<hr /><br />

### Using thread **without thread pool** and forcing 5 workers
```sh
# npm run start:thread

> node index_thread.js

Total programs: 900005
Worker 1, verified 180001 items and found 1 matches
Worker 2, verified 180001 items and found 0 matches
Worker 3, verified 180001 items and found 0 matches
Worker 4, verified 180001 items and found 0 matches
Worker 5, verified 180001 items and found 1 matches
[
  { title: 'Folks!', releaseYear: '1992' },
  { title: 'Folks', releaseYear: '1992' }
]
Elapsed: 5.867s
```

<hr /><br />

### Using thread **with thread pool** and using the number of available threads
```sh
# npm run start:thread_pool

> node index_thread_pool.js

Total programs: 900005
Worker 1, verified 75001 items and found 1 matches
Worker 2, verified 75001 items and found 0 matches
Worker 3, verified 75001 items and found 0 matches
Worker 6, verified 75001 items and found 0 matches
Worker 4, verified 75001 items and found 0 matches
Worker 5, verified 75001 items and found 0 matches
Worker 10, verified 75001 items and found 0 matches
Worker 12, verified 74994 items and found 1 matches
Worker 8, verified 75001 items and found 0 matches
Worker 9, verified 75001 items and found 0 matches
Worker 7, verified 75001 items and found 0 matches
Worker 11, verified 75001 items and found 0 matches
[
  { title: 'Folks!', releaseYear: '1992' },
  { title: 'Folks', releaseYear: '1992' }
]
Elapsed: 6.354s
```

<hr /><br />

### **Without threads** in a normal imperative code
```sh
# npm run start:imperative

> node index_imperative.js

Total programs: 900005
Verified 900005 items and found 2 matches
[
  { title: 'Folks!', releaseYear: '1992' },
  { title: 'Folks', releaseYear: '1992' }
]
Elapsed: 22.135s
```
