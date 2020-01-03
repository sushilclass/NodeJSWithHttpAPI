const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-WWW-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configure the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connection to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
})

// Allow Cors
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE');
        return res.status(200).json({});   
      
    }
    next();
})

// define a simple route
app.get('/',(req, res) => {
    res.json({"message": "Hello Welcome IMEG"});
});

// Require Customers routes
require('./app/routes/customer.routes.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});



