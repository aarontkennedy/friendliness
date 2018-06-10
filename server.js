// Dependencies
// =========================================================
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =========================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ layoutsDir: "app/public/views/layouts", 
                                  defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set('views', 'app/public/views');

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

// Get the routes
//require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/oauthRoutes.js')(app);

// Starts the server to begin listening
// =========================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
