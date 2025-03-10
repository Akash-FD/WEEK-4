const fs = require('fs');


// ----- writeFile with Asynchronous-------

const content = 'Hello, Node.js!';

fs.writeFile('output.txt', content, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully');
});

// ----- writeFile with synchronous-------
