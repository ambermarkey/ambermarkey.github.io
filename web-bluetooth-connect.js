navigator.bluetooth.requestDevice({
    filters: [{services: ['2bc61341-2291-4a80-bc74-21bf4c6de00f']}]
})
    .then(function (device) {
        return device.gatt.connect();
    })
    .then(function(service) {
        return server.getPrimaryService('2bc61341-2291-4a80-bc74-21bf4c6de00f');
    })
    .then(function (service) {
        return server.getCharacteristic('0a7b4fdf-c53d-4b17-9163-ece1d8db5ef5');
    })
    .catch(function (error) {
        console.error('Connection Failed!',error);
    });