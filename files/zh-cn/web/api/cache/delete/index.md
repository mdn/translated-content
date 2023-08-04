---
title: Cache.delete()
slug: Web/API/Cache/delete
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

{{domxref("Cache")}} 接口的 **`delete()`** 方法查询 request 为 key 的 {{domxref("Cache")}} 条目，如果找到，则删除该 {{domxref("Cache")}} 条目并返回 resolve 为 true 的 {{jsxref("Promise")}} 。如果没有找到，则返回 resolve 为 false 的 {{jsxref("Promise")}} 。

## 语法

```js
cache.delete(request,{options}).then(function(true) {
  //your cache entry has been deleted
});
```

### 返回值

如果 cache 条目被删除，则返回 resolve 为 true 的 {{jsxref("Promise")}}，否则，返回 resolve 为 false 的 {{jsxref("Promise")}}。

### 参数

- request
  - : 请求删除的 {{domxref("Request")}}。
- options {{optional_inline}}

  - : 一个对象，其属性控制删除操作中如何处理匹配缓存。可用的选项是：

    - `ignoreSearch`: 一个 {{domxref("Boolean")}} 值，指定匹配进程中是否忽略 `url` 中的查询字符串。如果设置为 `true`，`http://foo.com/?value=bar` 中的 `?value=bar` 部分在执行匹配时会被忽略。默认为 `false`。
    - `ignoreMethod`: 一个 {{domxref("Boolean")}} 值，当设置为 `true` 时，将阻止匹配操作验证{domxref("Request")}} HTTP 方法（通常只允许 GET 和 HEAD）。默认为 `false`。
    - `ignoreVary`: 一个 {{domxref("Boolean")}} 值，当设置为 `true` 时，告诉匹配操作不执行 `VARY` 头匹配。In other words, if the URL matches you will get a match regardless of whether the {{domxref("Response")}} object has a `VARY` header. 默认为 `false`。
    - `cacheName`: A {{domxref("DOMString")}} that represents a specific cache to search within. Note that this option is ignored by `Cache.delete()`.

## 示例

```js
caches.open("v1").then(function (cache) {
  cache.delete("/images/image.png").then(function (response) {
    someUIUpdateFunction();
  });
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
