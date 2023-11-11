//* 2. Crear un servidor HTTP asíncrono que responda con "Hola, mundo!".

// basic config of the server
const http = require ('http');


const host = 'localhost';
const port = 8001;

// request listener with server response
const requestListener = function (req, res)
{
  res.writeHead(200, 'exitazo');
  res.end('server funcionando maestro');
};

// create server and request listener as param

const server = http.createServer(requestListener);

server.listen(port,host, () => 
{
  console.log('Hola, mundo! Desde el puerto y host:', port, host);
});

// OTRA FORMA DE HACERLO

const host_v2 = 'localhost';
const port_v2 = 8002;
const server_v2 = http.createServer();
server_v2.on('request', async (req,res) => 
{
  const data = await data_func();
  console.log('data string ', JSON.stringify(data)); // data viene en objeto, con este metodo pasa a string
  console.log('data string ', data.data); // acceder al value del objeto data

  console.log(req.url);
  res.writeHead(200, 'exitazo total');
  res.end(JSON.stringify(data));
});

function data_func()
{
  return new Promise (resolve => 
    {
      setTimeout(() => 
      {
        resolve({data: 'here you have the data papi'});
      }, 2000);
    });
};

server_v2.listen(port_v2, host_v2, () =>{console.log('lets go')})