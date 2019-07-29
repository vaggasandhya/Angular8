const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const PORT = 4000;

const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./models/Db');
const toysRoutes = require('./routes/index');

mongoose.Promise = global.Promise;

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {
        console.log('Database is successfully connected..');
    }, err => {
        console.log(err);
    }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// setting up primary route as  http://localhost:4000/toys/
app.use('/toys', toysRoutes);

app.listen(PORT, function() {
    console.log('Server is running on port: http://localhost:4000/toys/');
});
