const express = require('express');
const Datastore = require('nedb');

const app = express();
const port = 3000;

const database = new Datastore('database.db');
database.loadDatabase();

//tells the server to listen on port for incoming connections
app.listen(port, () => {
    console.log("listening at " + port);
});

//tells server to use the public folder as the default startup point. It'll look for index.js
app.use(express.static('public'));

//tells the server to parse any incoming data to json format
app.use(express.json({ limit: '1mb' }));

//what the server does when a post request is made
app.post('/blogAPI', (request, response) => {
    console.log("New Post recieved: ");
    
    database.insert(request.body);
    response.json({
        status: 'success',
        postTitle: request.body.postTitle,
        postAuthor: request.body.postAuthor,
        postDate: request.body.postDate
    });
});

//what the server does when it recieves a get request at the 'api' end point
app.get('/api', (request, response) => {
    database.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    });
});