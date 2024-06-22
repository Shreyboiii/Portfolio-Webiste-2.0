const express = require('express');
const router = express.Router();
const connectDB = require('../modules/db');
const User = require('../modules/data');

let contacted = false;
// Home route
router.get('/', function(req, res) {
    res.render('home');
    connectDB(true);
});

// Contacted route
router.post('/contacted', function(req, res) {
    if (!contacted) {
        contacted = true;
        const { firstName, lastName, email, message } = req.body;
        const datetime = new Date().toLocaleString();

        // Save form data to database
        const formData = new User({
            firstName,
            lastName,
            email,
            DateTime: datetime,
            message
        });

        formData.save()
        .then(function() {
            const context = { firstName, lastName, datetime};
            res.render('post_request', context);
            connectDB(false);
        })
        .catch(function(err) {
            console.error(err);
            connectDB(false);
        });
    } else {
        contacted = false;
        res.redirect('/');
    }
    
});

module.exports = router;
