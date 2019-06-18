const express = require('express');
const socket = require('socket.io');

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(express.static('public'));

app.use('/', (req, res, next) => {
    res.render('index');
})

const server = app.listen(3000, () => {
    console.log('http://localhost:3000');
});

const io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('chat', function (data) {
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data);
    });
});
