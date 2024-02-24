const lodash = require('lodash')
const fs = require('fs')


const addingHtml = () => {
    fs.appendFile('index.html', `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>`, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

const addingCss = () => {
    fs.mkdirSync('./css', () => { })
    fs.appendFile('./css/style.css', `* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }`, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}


const deleteAll = () => {
    if (fs.existsSync('./css/style.css') == true) {
        fs.unlink('./css/style.css', () => { })
    }
    if (fs.existsSync('index.html') == true) {
        fs.unlink('index.html', () => { })
    }
    if (fs.existsSync('./css') == true) {
        fs.rmdir('./css', () => { })
    }
}

const addingJs = () => {
    fs.appendFile('script.js', `const lodash = require('lodash');
    const arr = [1, 2, 3];
    const sum = lodash.sum(arr);
    
    console.log(sum); // outputs 6`,
        function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
}
