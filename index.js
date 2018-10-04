"use strict";

function evalWorker(code, timeout) {
  return new Promise(function(res, rej) {
    var Worker = require("./worker.js");
    var worker = new Worker();
    var workerTimeout = setTimeout(function() {
      // kill Worker
      worker.terminate();
      worker = null;
      rej({
        error: "Timed out"
      });
    }, timeout | 2000);

    worker.onmessage = function(m) {
      clearTimeout(workerTimeout);

      // Kill Worker
      worker.terminate();
      worker = null;
      if (m.data) {
        if (m.data.hasOwnProperty("error")) {
          rej(m.data);
        } else {
          res(m.data);
        }
      } else {
        res(m.data);
      }
    };
    worker.postMessage(code);
  });
}

module.exports = evalWorker;

