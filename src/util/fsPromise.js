const path = require('path');
const fs = require('fs')
module.exports = function fsPromise() {
    const regexPattern = /<\/body>/i;
    const jsInject = `
    <script>
    console.log('inject completed')
        var socket = io('http://localhost:3333');
        socket.on('refresh', data => {
    
            location.reload(true);
            socket.emit('refreshed');
        })
    </script>
    `
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, '..', '..', 'public', 'index.html'), (err, data) => {
            resolve(data.toString().replace(regexPattern,
                `${jsInject}
            </body>
            `))
        })
    })
}
