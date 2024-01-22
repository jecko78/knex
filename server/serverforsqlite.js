const express = require('express')
const app = express()
const port = 3000
const bodyParser = require ('body-parser');
const db = require ('./db/std');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api',  async (req, res) => {
    const results = await db.getAllcars();
    res.status(200).json(results);    
});

app.post('/api/car',  async (req, res) => {
    const results = await db.createCar(req.body);
    res.status(201).json({id: results[0]});    
});

app.listen(port, () => console.log(`app listening on port ${port}!`))