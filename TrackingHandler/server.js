const app = require('express')();
const server = require('http').createServer(app);
const trackingService = require('./trackingService');
const userRoutes = require('./userController');

trackingService.io.attach(server);

app.use(userRoutes)


server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
