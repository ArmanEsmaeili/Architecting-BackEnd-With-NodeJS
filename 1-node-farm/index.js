const fs = require('fs');
// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `this is the text i wanna add: ${textIn}.\ncreated on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File Written seccusfully!');

// Non-Blocking - Asymchronous way
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) =>{
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) =>{
        console.log(data2);
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) =>{
            console.log(data3);
        
            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
              console.log('your file has been written😜');
            })
        });
    });
});
console.log("yeeaaaaaah");