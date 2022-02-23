import * as express from 'express'

const app = express();
const port: number = 3000;

app.get('/', (req, res) =>{res.end('Welcome Home!');})

app.get('/helloworld', (req, res) =>{
    console.log('requested helloworld service!')
    res.end('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening on the http://localhost:${port}`)
})