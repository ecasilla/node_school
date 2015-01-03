var koa = require('koa'),
    parse = require('co-body'),
    port = 3000,
    app = koa();

app.use(function *parse() {
 var body = yield parse(this);
 this.body = body.name.toUpperCase();
});

app.listen(port);
