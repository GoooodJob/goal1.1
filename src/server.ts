import * as express from 'express'

const app = express();
const port: number = 3000;

app.get('/', function (req, res) {res.end('Welcome Home!');})

app.get('/helloworld', function (req, res) {
    console.log('requested helloworld service!')
    res.end('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening on the http://localhost:${port}`)
})