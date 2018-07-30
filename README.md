# Eval Worker

This module evaluates a string in a Web Worker.

# Example

```
const evalWorker = require("eval-worker")

evalWorker("2+3", 2000, result => {
  console.log(result) // 5
}))
evalWorker("while(true){}", 2000, result => {
  console.log(result) // It is timed out after 2 seconds
}))
```
