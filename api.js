const Koa = require("koa");
const router = require("koa-router")();
const ApiCache = require("./cache-middleware/apicache");
const app = new Koa();
const apiCacheMiddleware = new ApiCache(10000);

router.get("/api/data/:id", async ctx => {
  console.log(ctx.body);
});
// api缓存中间件
app.use(apiCacheMiddleware.apiRequest());
app.use(router.routes());

app.listen(4000);
