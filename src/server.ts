<<<<<<< HEAD
import * as express from 'express'

const app = express();
const port: number = 3000;

app.get('/', function (req, res) {res.end('Welcome Home!');})

app.get('/helloworld', function (req, res) {
    console.log('Some shabi requested helloworld service!')
    res.end('Hello World!')
})

// app.get('/helloworldx2', function (req, res) {
//     res.end('Hello World!\nHello World!')
//  })

app.listen(port, () => {
    console.log(`App listening on the http://localhost:${port}`)
})
=======
import express = require('express');

const app = express();
const port = 3000;

app.get('/hello', function (req, res) {
    console.log('Someone requested helloworld service!')
    res.end('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening on the http://localhost:${port}`)
}) 
>>>>>>> 743454b (first commit)
