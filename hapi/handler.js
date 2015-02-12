var Hapi = require('hapi'),
    server = new Hapi.Server();

    server.connection({
     host:'localhost',
     port: +process.argv[2] || 8000
    })

    var rootHandler =  {
      file: 'index.html' 
    }
   
    server.route({path: '/', method:'GET', handler: rootHandler});


   server.start();
