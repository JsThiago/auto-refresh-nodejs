const logDebugger = require('./src/logsDebugger');
const socket = require('./src/socket');
const app = require('./src/app.js');



socket(app);
logDebugger.connected();