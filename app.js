const express = require('express');
const app = express();
const path = require('path');


app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});



app.listen(8080, () => {
    console.log('Listening on port 3000 now!');
});