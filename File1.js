const firstModule = require("./firstModule2");

console.log(firstModule.add(5, 3)); // 8
console.log(firstModule.subtract(5, 3)); // 2
console.log(firstModule.product(5, 3)); // 15

firstModule.greet("Hemant"); // my name is Hemant

//to get current filename and the directory name
console.log("Filename:", __filename);
console.log("Directory:", __dirname);
