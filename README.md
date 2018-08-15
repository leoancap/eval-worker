## Eval Worker

This module evaluates a string in a Web Worker.

### Example

```
const evalWorker = require("eval-worker")

evalWorker("2+3", 2000).then(result => {
  console.log(result) // 5
})
evalWorker("while(true){}", 2000).then(result => {
  console.log(result) // It is timed out after 2 seconds
})
```

### Usage with Webpack

You will need to install `worker-loader`

```
// webpack.config.js
{
  module: {
    rules: [
      {
       test: /worker\.js$/,
       include: paths.appNodeModules, // path to your node_modules folder
       use: {
         loader: "worker-loader"
       }
      }
    ]
  }
}
```
