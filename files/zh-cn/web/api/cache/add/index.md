---
title: Cache.add()
slug: Web/API/Cache/add
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

{{domxref("Cache")}}接口的 **`add()`** 方法接受一个 URL 作为参数，请求参数指定的 URL，并将返回的 response 对象添加到给定的 cache 中。 `add()` 方法在功能上等同于以下代码：

```js
fetch(url).then(function (response) {
  if (!response.ok) {
    throw new TypeError("bad response status");
  }
  return cache.put(url, response);
});
```

对于更复杂的操作，您可以直接使用{{domxref("Cache.put","Cache.put()")}}这个 API。

> **备注：** `add()` 将会覆盖之前存储在 cache 中与 request 匹配的任何 key/value 对。

> **备注：** 之前的 Cache (Blink 和 Gecko 内核版本) 在实现{{domxref("Cache.add")}}, {{domxref("Cache.addAll")}}, 和 {{domxref("Cache.put")}} 的策略是在 response 结果完全写入缓存后才会 resolve 当前的 promise。更新后的规范版本中一旦条目被记录到数据库就会 resolve 当前的 promise，即使当前 response 结果还在传输中。

## 语法

```js
cache.add(request).then(function () {
  //request has been added to the cache
});
```

### 参数

- request
  - : 要添加到 cache 的 request。它可以是一个 {{domxref("Request")}} 对象，也可以是 URL。

### 返回值

void 返回值的 {{jsxref("Promise")}}

### Exceptions

| **Exception** | **Happens when**                                                                                                                                                                             |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TypeError`   | URL 的协议不是 `http` 或 `https。`请求返回的 http 状态码不是 2xx (不是一个成功的响应) 。这种情况常常发生在请求不成功，或者是一个没有配置 CORS 的跨域请求（这种情况下返回的状态码永远是 0）。 |

## 示例

下面的代码块等待 {{domxref("InstallEvent")}} 事件触发，然后运行 {{domxref("ExtendableEvent.waitUntil","waitUntil")}} 来处理该应用程序的安装过程。包括调用 {{domxref("CacheStorage.open")}} 来创建一个新的缓存，然后使用 {{domxref("Cache.add")}} 来添加一个请求资源到该缓存。

```js
this.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("v1").then(function (cache) {
      return cache.add("/sw-test/index.html");
    }),
  );
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
