const express = require('express');
const server = express();

const PORT = 3490;


server.use(express,static(__dirname + '/assets'));

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(PORT, () => {
  const now = new Date();
  console.log('-'.repeat(40));
  console.log('  ' + now.toLocaleString());
  console.log('  ' + `Running on port ${PORT}'``);
});
