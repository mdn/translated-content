---
title: CacheStorage.has()
slug: Web/API/CacheStorage/has
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

{{domxref("CacheStorage")}} 对象的 **`has()`**方法返回一个 {{jsxref("Promise")}} 对象，当 {{domxref("Cache")}} 对象有 `cacheName` 时被处理为 `true` 。

## 语法

```plain
caches.has(cacheName).then(function(boolean) {
  // true: 缓存存在
});
```

### 返回值

返回一个 {{jsxref("Promise")}} 对象，缓存存在时 resolve 的布尔值为 `true` 否则为 `false` 。

### 参数

- cacheName
  - : 一个表示你正在 {{domxref("CacheStorage")}} 中查找的 {{domxref("Cache")}} 对象 name 的 {{domxref("DOMString")}}.

## 例子

在下面的例子中首先检测是否有名为 v1 的缓存存在，如果存在我们会向其添加内容，，如果不存在我们会做些对应的初始化动作。

```js
caches
  .has("v1")
  .then(function (hasCache) {
    if (!hasCache) {
      someCacheSetupfunction();
    } else {
      caches.open("v1").then(function (cache) {
        return cache.addAll(myAssets);
      });
    }
  })
  .catch(function () {
    // 处理异常
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
