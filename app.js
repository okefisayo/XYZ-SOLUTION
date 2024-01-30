const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({
        message: 'Automate all the things!',
        timestamp: 1529729125
        });
})

app.listen(3000, () => {
    console.log('app is running');
})
