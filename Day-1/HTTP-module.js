const http = require('http')

const server = http.createServer((req, res)=>{
    res.write('Hello Worlddddddddddddddddddd!')
    res.end()
}).listen(8080)