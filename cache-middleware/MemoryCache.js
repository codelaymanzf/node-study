class MemoryCache {
  constructor() {
    this.cacheMap = new Map();
  }

  set(key, value) {
    return this.cacheMap.set(key, value);
  }

  get(key) {
    return this.cacheMap.get(key);
  }

  has(key) {
    return this.cacheMap.has(key);
  }

  delete(key) {
    return this.cacheMap.delete(key);
  }

  clear() {
    return this.cacheMap.clear();
  }
}

module.exports = MemoryCache;
