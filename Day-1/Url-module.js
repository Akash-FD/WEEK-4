    // const url = require('url')
    // const link = 'http://localhost:8080/default.htm?year=2017&month=february';

    // const b = url.parse(link, true)

    // console.log(b.host);
    // console.log(b.pathname);
    // console.log(b.search);
    

//  const cluster = require('cluster');

// if (cluster.isWorker) {
//   console.log('I am a worker');
// } else {
//   console.log('I am a master');
//   cluster.fork();
//   cluster.fork();
// }



// const SHA256 = require("crypto-js/sha256");
// const plaindata = "GeeksForGeeks"
// const hasheddata = SHA256(plaindata).toString()
// console.log(hasheddata)

var dns = require('dns');
var w3 = dns.lookup('www.w3schools.com', function (err, addresses, family) {
  console.log(addresses);
  console.log(family);
  console.log(err);
  
});