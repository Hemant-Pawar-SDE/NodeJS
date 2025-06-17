const fs = require('fs');
const path = require('path');

// Correct usage of __dirname (no quotes)
// const dataFolder = path.join(__dirname, 'Data');

// Check if the Data folder exists, if not, create it
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log('Folder "Data" created.');
}

// Create a file path
// const filePath = path.join(dataFolder, 'demoFile.txt');

// Write to the file
fs.writeFileSync(filePath, "Hi I am the text from demoFile");
console.log("demoFile.txt created.");

// Read content from the file
const demoFileContent = fs.readFileSync(filePath, 'utf-8');
console.log("Content from demoFile.txt:", demoFileContent);

// Append content to the file
fs.appendFileSync(filePath, "\nI am the new content to be updated....");
console.log("New content appended to demoFile.txt.");

// ❌ Delete file (if exists)
if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);  // deletes file
    console.log('demoFile.txt deleted.');
  }


// ❌ Delete folder (only if empty)
if (fs.existsSync(dataFolder)) {
    fs.rmdirSync(dataFolder); // deletes folder
    console.log('Data folder deleted.');
  }
  
//To delete non-empty folders, use:
fs.rmSync(dataFolder, { recursive: true, force: true });

//Rename the file 
const oldPath = path.join(__dirname, 'Data', 'demoFile.txt');
const newPath = path.join(__dirname, 'Data', 'renamedFile.txt');

if (fs.existsSync(oldPath)) {
  fs.renameSync(oldPath, newPath);
  console.log('File renamed to renamedFile.txt');
}

//=================================================================================
const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'Data');
const filePath = path.join(dataFolder, 'demoFile.txt');

// Create folder async
fs.mkdir(dataFolder, { recursive: true }, (err) => {
  if (err) throw err;
  console.log('Folder created (async).');

  // Write file async
  fs.writeFile(filePath, 'Async file content', (err) => {
    if (err) throw err;
    console.log('File created (async).');

    // Append to file
    fs.appendFile(filePath, '\nMore content (async)', (err) => {
      if (err) throw err;
      console.log('Content appended (async).');

      // Read file
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) throw err;
        console.log('Async file read:\n', data);
      });
    });
  });
});
