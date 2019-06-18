const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    res.send('server is set')
})

const server = app.listen(3000, () => {
    console.log('http://localhost:3000');
});
