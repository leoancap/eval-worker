# Eval Worker

This module evals a string in a Web Worker.

# Example

```
const evalWorker = require("eval-worker")

console.log(evalWorker("2+3")) // 5
console.log(evalWorker("while(true){}")) // It is Timed out after 2 seconds
```
