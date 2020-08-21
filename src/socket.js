const fs = require('fs');
const path = require('path');
let socketRef;
fs.watch(path.join(__dirname, '..', 'public'), (eventType, filename) => {
    socketRef.emit('refresh')
});


function socket(server) {

    const io = require('socket.io')(server);

    io.on('connection', socket => {
        socketRef = socket
    })
    return socketRef;
}
module.exports = socket;