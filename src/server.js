var express = require('express');

var app = express();

app.get('/helloworld', function (req, res) {
    console.log('Some shabi requested helloworld service!')
    res.end('Hello World!')
})

// app.get('/helloworldx2', function (req, res) {
//     res.end('Hello World!\nHello World!')
//  })

app.listen(8080, function () {
   console.log("Server listening at 127.0.0.1:8080")
})