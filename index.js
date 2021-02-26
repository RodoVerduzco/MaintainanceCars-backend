const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const connectDB = require('./db/connection');
const Car = require('./db/Vehicle');

const app = express();
const port = 3030;

connectDB();

app.use(cors())
app.use(bodyParser.json())

app.get('/vehicles', (req, res) => {
    Car.find({}, (err, cars) => {
      if(err) {
        res.status(500).send("error");
      }
      console.log('returning')
      res.status(200).json({vehicles: cars})
    });

})

app.put('/update_vehicle', (req, res) => {
  let requestedCar = req.body.newCars;
  let carId = requestedCar['_id'];

  Car.findByIdAndUpdate({'_id': carId}, requestedCar, (err, result) => {
    if(err) {
      console.error("Error", err)
      res.status(500).send("ERROR");
    }

    res.status(201).send();
  })
})
  
app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
})