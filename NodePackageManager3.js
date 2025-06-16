// //to create package.json

// const express = require("express")

// ✅ Method 1: Auto-generate using npm init
// Open your terminal/command prompt

// Navigate to your project directory:
// npm init
// --This will ask you a series of questions:

// package name
// version
// description
// entry point (default: index.js)
// test command
// git repository
// keywords
// author
// license

// After answering, it will generate a package.json file.

// ✅ Method 2: Quick version with default values
// If you don’t want to answer all the questions, you can use:

// npm init -y
// This will create a package.json file with default values like:

// --with npm init -y
// json
// Copy
// Edit
// {
//   "name": "your-folder-name",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC"
// }

// //after this whenever you will install any package
// -- using npm install express
//   (it will add the dependency in package.json)

// --for the first time it will create node_modules folder and packag-lock.json
