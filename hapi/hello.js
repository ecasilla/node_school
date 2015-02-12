var Hapi = require('hapi'),
    server = new Hapi.Server();

    server.connection({
     host:'localhost',
     port: +process.argv[2]||8000
    })
    server.route({path: '/', method:'GET', handler: rootHandler});

    function rootHandler(request,reply) {
      reply("Hello Hapi");
    }
   
   server.start();
