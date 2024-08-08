const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
// Setup server port

//const port = process.env.PORT || 4000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root/default route

// Configuring the database
const dbConfig = require('./mouni/data.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
//useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database.', err);
  process.exit();
});
app.get('/zaheer', (req, res) => {
  res.json({"message": "Hello World Chalapathi"});
});
// Require Users routes
const userRoutes = require('./src/routes/cust.routes')
// using as middleware
app.use('/api/users', userRoutes)
// listen for requests
app.listen(6000, () => {
  console.log(`Node server is listening on port `);
});