const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'data');

fs.mkdir(folderPath, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("✅ Folder 'data' created");

    const filePath = path.join(folderPath, 'info.txt');

    fs.writeFile(filePath, "Initial content from info.txt file....", (err) => {
      if (err) {
        console.log("❌ File not created:", err.message);
      } else {
        console.log("✅ File info.txt got created");

        fs.readFile(filePath, 'utf-8', (err, result) => {
          if (err) {
            console.log('❌ Error reading file:', err);
          } else {
            console.log("📄 File content:", result);

            fs.appendFile(filePath, '\nNew content for info.txt', (err) => {
              if (err) {
                console.log('❌ Error appending data:', err);
              } else {
                console.log("✅ New data appended");

                fs.readFile(filePath, 'utf-8', (err, result2) => {
                  if (err) {
                    console.log('❌ Error while reading updated file:', err);
                  } else {
                    console.log('📄 Reading updated info.txt...');
                    console.log(`📄 Final file content:\n${result2}`);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});

// ➜  SRC git:(main) ✗ node CallbackHell9.js
// ✅ Folder 'data' created
// ✅ File info.txt got created
// 📄 File content: Initial content from info.txt file....
// ✅ New data appended
// 📄 Reading updated info.txt...
// 📄 Final file content:
// Initial content from info.txt file....
// New content for info.txt
// =================================================================================================
// Callback Hell Structure
// fs.mkdir
//   → fs.writeFile
//     → fs.readFile
//       → fs.appendFile
//         → fs.readFile (again)
//Each layer depends on the previous — this is why it’s called "Callback Hell."

