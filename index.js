const fs = require('fs');
const http = require('http');
const url = require('url');




const server = http.createServer((req, res) => {
  res.end('working!')
})

server.listen(8000, () => {
  console.log('Listening on requests on port 8000')
})