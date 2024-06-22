// Import required modules
const express = require('express');
const path = require('path');
// const connectDB = require('./modules/db.js');
// const User = require('./modules/data.js');
const routes = require('./routes/routes.js'); 
const config = require('./modules/config.js');

// Constants
const host = 'localhost';
const port = 3000;

// Initialize Express app
const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

// Set up Handlebars view engine
const hbs = require('express-handlebars');
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    layoutsDir: __dirname + '/views/layouts',
	defaultLayout: 'main_layout',
    extname: 'hbs',
}));

// Use routes
app.use('/', routes); // Use routes defined in routes.js

// Start server
app.listen(config.port, config.host, function() {
    console.log(`Server running at http://${host}:${port}`);
});
