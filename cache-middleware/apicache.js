const Cache = require("./MemoryCache");
let cache = new Cache();

class ApiCache {
  constructor(refreshTime) {
    this.refreshTime = refreshTime;
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
    setTimeout(() => {
      cache.clear();
      console.log("cache clear");
    }, this.refreshTime);
  }
}

module.exports = ApiCache;
