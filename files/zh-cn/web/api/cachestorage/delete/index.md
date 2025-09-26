---
title: CacheStorage.delete()
slug: Web/API/CacheStorage/delete
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

{{domxref("CacheStorage")}} 接口的 **`delete()`** 方法查找匹配 `cacheName` 的 {{domxref("Cache")}} 对象。如果找到，则删除 {{domxref("Cache")}} 对象，则返回的 {{jsxref("Promise")}} 兑现为 `true`；如果未找到 {{domxref("Cache")}} 对象，则兑现为 `false`。

你可以通过窗口的 {{domxref("Window.caches")}} 属性或 worker 的 {{domxref("WorkerGlobalScope.caches")}} 属性访问 `CacheStorage`。

## 语法

```js-nolint
delete(cacheName)
```

### 参数

- `cacheName`
  - : 想要删除的缓存对象的名称。

### 返回值

一个 {{jsxref("Promise")}}，如果找到 {{domxref("Cache")}} 对象，并成功删除，则兑现为 `true`；否则，兑现为 `false`。

## 示例

在此代码片段中，我们等待一个 activate 事件，然后运行一个 {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} 块，其在一个新的 service worker 被激活前清除所有旧的、未使用的 cache. 这里我们有一个白名单，其中包含我们想要保留的 cache 的 name. 我们使用 {{domxref("CacheStorage.keys")}} 返回 {{domxref("CacheStorage")}} 对象中 cache 的键，然后检查每个键值，以查看它是否在白名单中。如果没有，我们使用 `delete()` 删除它。

```js
this.addEventListener("activate", function (event) {
  var cacheWhitelist = ["v2"];

  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (cacheWhitelist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} 和 {{domxref("WorkerGlobalScope.caches")}}
