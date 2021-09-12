const Koa = require('koa');
const { port } = require('../config/config.default');

const app = new Koa();

// logger
app.use( async (ctx, next) => {
  next();
  const time = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} - ${ctx.url} - ${time}`);
});

// response time
app.use(async (ctx, next) => {
  const startTime = Date.now();
  next();
  const ms = Date.now() - startTime;
  ctx.set('X-Response-Time', ms);
});

app.use(async (ctx) => {
  ctx.body = 'dong';
});


app.listen(port, () => {            
  console.log('应用启动成功, 端口: '+ port);
});

