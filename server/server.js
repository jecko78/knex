const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require ("./db/tbCar");
const db1 = require ("./db/tbApplicant");
const port = 3500

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/cars',async (req,res) => {
  const cars = await db.getAllCars();
  res.status(200).json({ cars});
});

app.post('/cars',async (req,res) => {
  const results = await db.createCar(req.body);
  res.status(200).json({makeid: results[2], make: results[1], model: results[2],year: results[3]});
})

app.post('/applicant',async (req,res) => {
  const results = await db1.createApplicant(req.body);
  res.status(200).json({id: results[0]});
})

app.get('/applicant',async (req,res) => {
  const appcant = await db1.getAllApplicant();
  res.status(200).json({ appcant });
});
//app.use(express.static('public'));
// app.get('/', (req, res) => res.send('hello world'));
app.listen(port, () => console.log(`app listening on port ${port}!`))