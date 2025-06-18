// ✅ What is async/await?
// async and await are syntactic sugar introduced in ES2017 (ES8).

// They make working with Promises easier, cleaner, and more readable.

// Instead of chaining .then() and .catch(), you can write asynchronous code like synchronous code.

// 🧠 Important Rules
// await only works inside an async function

// await pauses execution until the Promise resolves/rejects

// Use try...catch to handle errors .....for .then .catch no try catch block is applicable

function greetFun(name){
    return new Promise((resolve, reject)=>{
        if(name){
            resolve(`hello, good morning ${name}`);
        }
        else{
            reject("the name not provided....")
        }
    })
}

//with .then() and .catch() way--
// greetFun("hemant").then((result)=>{
//     console.log(result);                           //hello, good morning hemant
// }).catch((err)=>{
//     console.log(`the error has found= ${err}`);  //the error has found= the name not provided....
// })

//with async/await--


async function greetUser(){
 try{
    const result=await greetFun("");     //hello, good morning hemant
    console.log(result);
 }catch{
    console.log('error found.....')             //error found.....
 }

}

greetUser();

// ==================================================================================
// Let’s say you want to:

// Read a file

// Wait for it to complete

// Then log the result

const fs = require('fs').promises;

async function readFileData() {
  try {
    const data = await fs.readFile('demo.txt', 'utf-8');
    console.log("✅ File content:", data);
  } catch (err) {
    console.log("❌ Error reading file:", err);
  }
}

readFileData();
