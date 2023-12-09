// client.js
const io = require('socket.io-client');

var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

const socket = io('http://localhost:3000', {
    auth: { token },
    extraHeaders: { 'apptoken': 'pga' }
});

socket.on('connect', () => {
    console.log('Connected!');
});

socket.on('reconnect_attempt', () => {
    console.log('Reconnecting...');
});

socket.on('connect_error', (error) => {
    console.log('Error connecting...');
});

socket.on('disconnect', (reason) => {
    console.log('Disconnected!');
});


socket.on('authenticated', () => {
    console.log('Authenticated!');
});


socket.on('unauthorized', (error) => {
    console.log('Unauthorized!');
});









socket.on('eventName', (data) => {
    console.log(`${new Date()} ${data.key}`);
    socket.emit('message', { name: 'ali' })

});

