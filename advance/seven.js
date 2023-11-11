// 7. Crear un servidor TCP asíncrono.
/*

const net = require('net');

const port = 8002;
host = 'localhost';

// create server
const server = net.createServer(on_client_connection);

server.listen(port,host, () =>
{
    console.log('server ready amigo on ', port, host)
});

*/

const net = require('net');

//define host and port to run the server
const port = 9000;
const host = 'localhost';

//Create an instance of the server
const server = net.createServer(client_conection);

//Start listening server on given port and host.
server.listen(port,host,function()
{
   console.log(`Server started on port ${port} at ${host}`); 
});

//Declare connection listener function
function client_conection(sock)
{
    //Log when a client connnects.
    console.log(`${sock.remoteAddress}:${sock.remotePort} Connected`);

     //Listen for data from the connected client.

    sock.on('data',function(data)
    {
        //Log data from the client
        console.log(`${sock.remoteAddress}:${sock.remotePort} Says : ${data} `);

        //Send back the data to the client.
        sock.write(`You Said ${data}`);
    });

    //Handle client connection termination.
    sock.on('close',function()
    {
        console.log(`${sock.remoteAddress}:${sock.remotePort} Terminated the connection`);
    });

    //Handle Client connection error.
    sock.on('error',function(error)
    {
        console.error(`${sock.remoteAddress}:${sock.remotePort} Connection Error ${error}`);
    });
};

// Ahora con el comando telnet localhost 9000 (telnet $host $port) se pueden enviar mensajes al server.