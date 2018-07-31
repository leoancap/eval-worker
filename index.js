function evalWorker(code, timeout, callback) {
  const Worker = require("./worker.js")
  var worker = new Worker()
  var workerTimeout = setTimeout(() => {
    // kill Worker
    worker.terminate()
    worker = null
    callback({
      error: "Timed out",
    })
  }, timeout | 2000)

  worker.onmessage = m => {
    clearTimeout(workerTimeout)

    // Kill Worker
    worker.terminate()
    worker = null

    callback(m.data)
  }
  worker.postMessage(code)
}

module.exports = evalWorker
