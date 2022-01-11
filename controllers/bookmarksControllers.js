//Dependencies
const express = require('express')
// const app = require('../app')

//files
const bookmarksArray = require('../models/bookmarks')

//.Router creates a new controller that handles a sub-rout.
//In this case, it'll handle everything 
//that starts with '/bookmarks'.
const bookmarks = express.Router()

//Routes
// '/bookmarks' is already assumed bcuz app.js has delegated it to us.
bookmarks.get('/', (request, response) =>{
    console.log('GET request to /bookmarks')
response.json(bookmarksArray)
})




//Exports the bookmarks controller/router
//So that 'app can delegate the '/bookmarks' route to it
module.exports = bookmarks;