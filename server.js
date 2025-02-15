const express = require('express');
const Gun = require('gun');

const PORT=8765;

const app = express();

// Enable Gun.js as a relay peer
app.use(Gun.serve);

// Serve on port 8765 (change if needed)
const server = app.listen(PORT, () => {
    console.log("Uniroad Gun Relay is running on "+PORT);
});

// Initialize Gun with WebSockets
Gun({ web: server });
