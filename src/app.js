const express = require('express');
const path = require('path');
const app = express();
const logDebugger = require('./logsDebugger');

logDebugger.connecting();
app.use(express.static(path.join(__dirname, '..', 'public')));




app.use('/', (req, res) => {
    return res.send(path.join(__dirname, '..', 'public', 'index.html'));
});



module.exports = app.listen('3333');