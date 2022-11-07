import express from 'express';

const app = express();
// using express as middleware to parse json
app.use(express.json());
// .get() => 1. route path to listen for, 2. callback. 
// Callback => 1. request object w/ req details, 2. response object
app.put('/hello', (req, res) => {
    res.send(`Hello ${req.body.name}!`);
});

// :urlParamName key(s) specifies param wanted in route
app.get('/hello/:name/goodbye/:otherName', (req, res) => {
    const { name } = req.params; // destructuring params object
    res.send(`Hello ${name}!!`);
    console.log(req.params)
});

// listen() => 1. which port to listen on, 2. callback to call once server is listening
app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});