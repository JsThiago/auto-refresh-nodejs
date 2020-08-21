const express = require('express');
const path = require('path');
const app = express();
const logDebugger = require('./logsDebugger');
const fsPromise = require('./util/fsPromise.js');
logDebugger.connecting();
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/fr', async (req, res) => {
    const html = await fsPromise();
    return res.send(html);
});



module.exports = app.listen('3333');