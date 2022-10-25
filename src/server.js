import express from 'express';

const app = express();

// .get() => 1. route path to listen for, 2. callback. 
// Callback => 1. request object w/ req details, 2. response object
app.get('/hello', (req, res) => {
    res.send('Hello!');
});

// listen() => 1. which port to listen on, 2. callback to call once server is listening
app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});