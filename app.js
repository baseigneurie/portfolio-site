const express = require('express');
const app = express();

// const home = require('./views/index.html')


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(3000, () => {
    console.log('Listening on port 3000 now!');
});