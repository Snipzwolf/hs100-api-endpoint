#!/usr/bin/env node

var net = require('net');
const Hs100Api = require('hs100-api');
const client = new Hs100Api.Client();

var server = net.createServer();
server.on('connection', handleConnection);

server.listen(9000, function() {
  console.log('server listening to %j', server.address());
});

function handleConnection(conn) {
  var remoteAddress = conn.remoteAddress + ':' + conn.remotePort;
  console.log('new client connection from %s', remoteAddress);

  conn.setEncoding('utf8');

  conn.on('data', onConnData);
  conn.once('close', onConnClose);
  conn.on('error', onConnError);

  function onConnData(d) {
    console.log('connection data from %s: %j', remoteAddress, d);
    const plug = client.getPlug({host: process.env.PLUG_IP});
    const res = plug.setPowerState((d.trim().toLowerCase() === 'true'));
    //console.log(res);
    conn.write("done");
  }

  function onConnClose() {
    console.log('connection from %s closed', remoteAddress);
  }

  function onConnError(err) {
    console.log('Connection %s error: %s', remoteAddress, err.message);
  }
}
