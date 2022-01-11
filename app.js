//app.js
//files
const bookmarksControllers = require('./controllers/bookmarksControllers')
const express = require('express');

//creates the Express app
const app = express();

// Delegates everything that starts with bookmarks controller.
// .use takes in two arguments :
// - the sub-route for the controller to handle
// - the controller that should handle it
// - Read as a sentence : "for any route, use the bookmarks controller'.
app.use('/bookmarks', bookmarksControllers)

//Home route
app.get("/", (request, response) =>{
    console.log('GET request to /')
    response.send("Welcome to Bookmarks 'R' Us")
})


// Start (*) Matches anything we've not matched yet
app.get('*', (request, response) =>{
    console.log('GET request to *')
response
.status(404)
.json({Error: 'Page not found!'})
})

//Exports our app for the server
module.exports = app;