var koa = require('koa'),
  app = koa(),
  port = process.argv[2];

app.use(function *(){
  this.body = 'hello koa';
})

app.listen(port);
