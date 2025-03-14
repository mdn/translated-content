---
title: CacheStorage.has()
slug: Web/API/CacheStorage/has
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

{{domxref("CacheStorage")}} 接口的 **`has()`** 方法返回一个 {{jsxref("Promise")}} 对象，其在 {{domxref("Cache")}} 对象有 `cacheName` 时兑现为 `true`。

你可以通过窗口的 {{domxref("Window.caches")}} 属性或 worker 的 {{domxref("WorkerGlobalScope.caches")}} 属性访问 `CacheStorage`。

## 语法

```js-nolint
has(cacheName)
```

### 参数

- cacheName
  - : 一个表示你正在 {{domxref("CacheStorage")}} 中查找的 {{domxref("Cache")}} 对象 name 的 {{domxref("DOMString")}}.

### 返回值

一个 {{jsxref("Promise")}} 对象，缓存存在时兑现为 `true`，否则兑现为 `false`。

## 示例

在下面的例子中首先检测是否有名为 v1 的缓存存在，如果存在我们会向其添加内容，如果不存在我们会做些对应的初始化动作。

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

- [使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} 和 {{domxref("WorkerGlobalScope.caches")}}
