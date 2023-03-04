var http = require('http')

http.createServer(function (req, res) {
  res.end();
}).listen(4000, () => {
    console.log(`Aditya`)
});