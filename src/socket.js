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
        socket.on('refreshed', (data) => {
            console.log('refresh complete');
        });
    })
    return socketRef;
}
module.exports = socket;