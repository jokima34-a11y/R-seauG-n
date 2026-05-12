import fs from "fs";
import path from "path";

// Get the absolute path to the 'out' folder
const outputFolder = path.join(__dirname, "../out");

// Ensure the folder exists before writing to it
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

// Generate a file inside 'out'
const fileName = "generated_build.lua";
const filePath = path.join(outputFolder, fileName);

fs.writeFileSync(filePath, "-- Exported by RéseauGén\nprint('Build Successful')");

console.log(`File exported to: ${filePath}`);