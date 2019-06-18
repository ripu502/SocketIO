const socket = io.connect('https://strues.serveo.net/');

const handle = document.getElementById('handle');
const message = document.getElementById('message');
const button = document.getElementById('send');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

button.addEventListener('click', function () {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});

// Listen for events
socket.on('chat', function (data) {
    feedback.innerHTML = "";
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

message.addEventListener('keypress', function () {
    socket.emit('typing', handle.value);
});

socket.on('typing', function (data) {
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});