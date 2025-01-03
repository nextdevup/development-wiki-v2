const { exec } = require("child_process");

// Define the TiddlyWiki command with the output directory set to two folders up
const command = "tiddlywiki wiki --build index --output ../../";

// Execute the command
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Stdout: ${stdout}`);
});
