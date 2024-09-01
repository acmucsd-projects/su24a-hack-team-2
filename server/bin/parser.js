var connect = require('../../config/connect');
var userSchema = require('../../config/userSchema');
var productSchema = require('../../config/productSchema');

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