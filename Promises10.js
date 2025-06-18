// Promisification is the process of converting a regular (or callback-based) function into a function that returns a Promise.

function dividePromise(num1, num2) {
    return new Promise((res, rej) => {
      if (num2 === 0) {
        rej("❌ Cannot divide by zero!");
      } else if (num1 === 0) {
        res(0);
      } else {
        res(`✅ The result is ${num1 / num2}`);
      }
    });
  }
  
  dividePromise(12, 0)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      console.log("🔁 The computation is done...");
    });
  

//Let’s say you want to:

// Read a file

// Wait for it to complete

// Then log the result

const fs = require('fs').promises;

fs.readFile('demo.txt', 'utf-8')
  .then(data => {
    console.log("File content:", data);
  })
  .catch(err => {
    console.log("Error reading file:", err);
  });
