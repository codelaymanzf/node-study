const Cache = require("./MemoryCache");
let cache = new Cache();

class ApiCache {
  constructor() {
    this.timer = null;
    this.cacheRefresh();
  }

  apiRequest() {
    return async function(ctx, next) {
      let currentPath = ctx.url;
      let responseData = `mock ${currentPath} api's response data`;

      if (!cache.has(currentPath)) {
        cache.set(currentPath, responseData);
        ctx.body = responseData;
      } else {
        ctx.body = cache.get(currentPath) + " from cache";
      }

      await next();
    };
  }

  cacheRefresh() {
    let curTime = new Date().getTime();
    let secondDayZero = new Date().setHours(24, 0, 0, 0);
    let countDown = secondDayZero - curTime;

    console.log("countDown", countDown);

    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      cache.clear();

      console.log("========== clear cache ========");

      this.cacheRefresh();
    }, countDown);
  }
}

module.exports = ApiCache;
