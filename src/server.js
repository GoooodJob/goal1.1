const express = require('express');
let app = express();

app.get('/helloworld', function(req, res) {
  res.send('hello world');
});

let server = app.listen(3000, function() {
  let host = server.address().address;
  let port = server.address().port;

  console.log(`app listening at port: ${port}`);
});