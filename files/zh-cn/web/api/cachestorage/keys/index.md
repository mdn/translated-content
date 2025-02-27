---
title: CacheStorage.keys()
slug: Web/API/CacheStorage/keys
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

{{domxref("CacheStorage")}} 接口的 **`keys()`** 方法返回一个 {{jsxref("Promise")}}对象，它会兑现一个包含 {{domxref("CacheStorage")}} 对象按创建顺序跟踪的所有具名 {{domxref("Cache")}} 对象对应的字符串的数组。使用此方法会迭代所有 {{domxref("Cache")}} 对象。

你可以通过窗口的 {{domxref("Window.caches")}} 属性或 worker 的 {{domxref("WorkerGlobalScope.caches")}} 属性访问 `CacheStorage`。

## 语法

```js-nolint
keys()
```

### 参数

无。

### 返回值

一个会兑现为 {{domxref("CacheStorage")}} 对象中所有 {{domxref("Cache")}} 对象的名称的数组的 {{jsxref("Promise")}}。

## 示例

在此代码片段中，我们监听{{domxref("ServiceWorkerGlobalScope.onactivate", "activate")}} 事件，然后运行一个 {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} 方法，该方法在新的 service worker 被激活之前清除老的、无用的 cache。这里我们设置一个包含缓存名称的白名单。通过使用 `keys()` 方法来返回 {{domxref("CacheStorage")}} 对象中的 keys 集合，然后检查缓存 key 是否在白名单中，如果不存在，则使用 {{domxref("CacheStorage.delete")}} 方法来删除该缓存。

```js
this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      });
    })
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
