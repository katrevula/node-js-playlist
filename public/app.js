var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');

myReadStream.on('data', function(chunk){

  console.log('new chunk recieved: ');
  console.log(chunk);
});

// var server = http.createServer(function(req, res){
//
// });
