/**
 * REQUIRE EXTERNAL MODULES
 */
const http = require('http');
const routes = require('./routes/ta02');

/**
 * CREATES SERVER ON PORT 3000
 */
const server = http.createServer(routes.handler);
server.listen(3000);