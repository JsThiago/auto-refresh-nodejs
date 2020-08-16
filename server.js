const express = require('express');
const path = require('path');
const app = express();
const server = app.listen('3333');
const io = require('socket.io')(server);
const messages = [];
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', (req, res) => {
    return res.send(path.join(__dirname, 'public', 'index.html'));
});

io.on('connection', socket => {
    console.log(`Socket Conectado ${socket.id}`);
    socket.on('connected', (data) => {
        console.log(messages);
        if (messages.length) {
            socket.emit("firstConnection", messages);
        }

    })
    socket.on('sendMessage', data => {
        messages.push(data);
        socket.broadcast.emit("receivedMessage", data);
    })
})

console.log('O servidor está rodando');