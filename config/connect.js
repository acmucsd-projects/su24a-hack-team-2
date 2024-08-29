var config = require('./config');

const mongoose = require('mongoose');
 

mongoose.connect(config.DB_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    dbName: 'mainDB' }).then(() => {
  console.log('Connected to MongoDB database');
});

