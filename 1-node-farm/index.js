const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `this is the text i wanna add: ${textIn}.\ncreated on ${Date.now()}`
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File Written seccusfully!');
