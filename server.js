const logDebugger = require('./src/logsDebugger');
const socket = require('./src/socket');
const app = require('./src/app.js');
const childProcess = require('child_process');


socket(app);
logDebugger.connected();
childProcess.exec('start http://localhost:3333/fr');