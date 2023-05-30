<h1 align="center">NodeJS Worker Threads</h1>

<p align="center">
    The "nodejs_worker_threads" repository showcases three distinct algorithms implemented in Node.js, each highlighting different approaches to leveraging the "worker_threads" module for efficient concurrent processing. The repository provides a comprehensive benchmark analysis of these algorithms and includes a README.md file with detailed results.
</p>

<br />
<h3 align="center">🟢 Status: Concluded</h3>

<br />
<h3 align="center">😍 How to use</h3>

```sh
npm i
npm run start:thread
npm run start:thread_pool
npm run start:imperative
```

<br />
<h3 align="center">📈 Benchmark result</h3>


```
- Intel Core i5 11400F 2.6~4.40GHz (6 Cores / 12 Threads)
- 32GB DDR4 3200MHz
```

<hr />

<h3 align="center">Using thread <b>without thread pool</b> and forcing 5 workers</h3>

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

<hr />
<h3 align="center">Using thread <b>with thread pool</b> and using the number of available threads</h3>

### 
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

<hr />
<h3 align="center"><b>Without threads</b> in a normal imperative code</h3>

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

<br />

<h3 align="center">🎨 Contributor(s)</h4>
<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/ItaloServio">
        <img src="https://avatars1.githubusercontent.com/u/60075865?s=460&u=407042a6a58218d29495ca19dda1bef5ca4540c3&v=4" width="100px;" alt="Profile"/>
        <br />
        <sub>
          <b>Ítalo Sérvio</b>
        </sub>
      </a>
  </tr>  
</table>
