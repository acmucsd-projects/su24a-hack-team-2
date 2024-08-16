const mongoose = require('mongoose');
 
mongoose.connect(config.databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});