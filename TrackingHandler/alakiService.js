const trackingService = require('./trackingService');


async function Test(){
    await trackingService.TestSocket();

}

module.exports = {Test}