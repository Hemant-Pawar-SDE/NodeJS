const path = require("path");

const parsed = path.parse(__filename);
console.log(parsed);
/*
{
  root: '/',
  dir: '/Users/hemant/learning',
  base: 'path-demo.js',
  ext: '.js',
  name: 'path-demo'
}
*/

console.log(`directory name is =${path.dirname(__filename)}`);
//absolute path of the folder in which current file has...

console.log(`file name of the current file =${path.basename(__filename)}`);

console.log(`file extension is =${path.extname(__filename)}`);

console.log(path.join("/user", "documents", "node", "projects"));

path.resolve(__dirname, "pathModule4.js");
// Resolves a sequence of paths into an absolute path.
// joins and returns the absolute path to that file.

//directory name is =/Users/hemant/learning
// file name of the current file =path-demo.js
// file extension is =.js
// /user/documents/node/projects
