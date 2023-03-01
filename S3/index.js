const express = require('express');


const app = express();

app.listen(3003, () => {
    console.log('Listening on port 3003');
});

app.get('/', (req, res) => {
    res.send('Hello from S3')
})