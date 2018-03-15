var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyUSB0', {baudRate: 9600});

port.write('ati\r\n', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message);
  }
  console.log('message written');
});
