import { Request, Response, Application } from 'express'
import express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req: Request, res: Response) {res.end('Welcome Home!');})

app.get('/api/helloworld', function (req, res) {
    console.log('Someone requested the helloworld endpoint at ' + new Date())
    res.end('Hello World!')
})

app.post('/api/addition', function (req: Request, res: Response) {
    const a: number = +req.body.a
    const b: number = +req.body.b
    const sum: number = a + b

    console.log(new Date() + ` - Addtion of ${a} plus ${b} is called`)
    res.send({'result': sum}); 
})

app.listen(port, () => {
    console.log(`App listening on the http://localhost:${port}`)
})