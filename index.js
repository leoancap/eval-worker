module.exports = function runCode(code, timeout, callback) {
  const Worker = require("./worker.js")
  var worker = new Worker()
  var msg = {}
  var t = setTimeout(() => {
    worker.terminate()
    worker = null
    msg = {
      error: "Timed out",
    }
    callback(msg)
  }, timeout | 2000)

  worker.onmessage = m => {
    clearTimeout(t)
    console.log(m.data)
    callback(m.data)
    worker.terminate()
    worker = null
  }
  worker.postMessage(code)
}
