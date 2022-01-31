const { request, response } = require('express');
const express = require('express');  //installs whole express library

const app = express();  //first api right here <

app.get('/', (request, response) => {
    response.send("My first Express API... Works!");
    
})  //any requests to this address, we're going to send it something. (request and response are packaged together)


app.listen(3000, () => console.log('listening on port 3000...'));  //Listens to port 3000
