const express = require('express');
const port = process.env.PORT || 8000;
const db = require('./config/mongoose');

const app = express()

app.use(express.urlencoded({extended: true}));


// Start the server and make it listen on the specified port (8000).
app.listen(port, (err)=> {
    // Check for any errors that occurred during server startup. If an error occurs, log the error message.
    if(err){
        console.log(`Error while running the server ${err}`);
    }
    // If the server starts successfully, log a success message along with the port number.
    console.log(`Server is running successfully at port ${port}`)
});