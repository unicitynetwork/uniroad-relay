const signaling = require('y-webrtc-signaling');
const wss = signaling.setupWSS({
    port: 4444,
    host: '0.0.0.0',
    certPath: '/path/to/cert.pem',    // Optional for SSL
    keyPath: '/path/to/key.pem'       // Optional for SSL
});

console.log('Signaling server running on port 4444');
