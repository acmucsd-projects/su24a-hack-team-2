import config from '../../config/config';
import connect from '../../config/connect';
import userSchema from '../../config/userSchema';

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.post('/submit', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
    });

    newUser.save((err) => {
        if (err) {
            res.send('Error saving user data.');
        } else {
            res.send('User data saved successfully!');
        }
    });
});