const io = require('socket.io')();
const jwt = require('jsonwebtoken');

//authentication
io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    const extraHeaders = socket.handshake.headers;
    const appToken = extraHeaders['apptoken'];

    console.log(`Token ${token}`)
    console.log(`AppToken ${appToken}`)

    if (appToken !== 'pga') {
        return next(new Error('Authentication error'));
    }

    next();


    // jwt.verify(token, 'YOUR_SECRET_KEY', (err, decoded) => {
    //     if (err) {
    //         return next(new Error('Authentication error'));
    //     }
    //     socket.decoded = decoded;
    //     next();
    // });

});

io.on('connection', (socket) => {
    console.log(`Client ${socket.id} connected`);
    socket.emit('authenticated');

    socket.on('disconnect', () => {
        console.log(`Client ${socket.id} disconnected`);
    });

    //Customer On
    socket.on('message', (data) => {
        console.log(`${new Date()}`, data.name);
    });
});



async function TestSocket() {
    io.emit('eventName', { key: 'hamid' });
}

module.exports = { TestSocket, io }