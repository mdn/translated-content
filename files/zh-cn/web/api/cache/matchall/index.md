---
title: Cache.matchAll()
slug: Web/API/Cache/matchAll
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

{{domxref("Cache")}} 接口的 **`matchAll()`** 方法返回一个 {{jsxref("Promise")}} ，其 resolve 为 {{domxref("Cache")}} 对象中所有匹配请求的数组。

## 语法

```js
cache.matchAll(request, { options }).then(function (response) {
  //do something with the response array
});
```

### 返回值

一个 {{jsxref("Promise")}}，resolve 为 {{domxref("Cache")}} 对象中所有匹配请求的数组。

> **备注：** {{domxref("Cache.match()")}} 基本上与`Cache.matchAll()` 相同，除了它 resolve 为 `response[0]` (即第一个匹配响应) 而不是 `response` (数组中所有匹配的响应)。

### 参数

- request {{optional_inline}}
  - : {{domxref("Cache")}} 中你尝试查找的 The {{domxref("Request")}} . 如果忽略这一参数，你将获取到 cache 中所有 `response` 的副本。
- options {{optional_inline}}

  - : 一个选项对象，允许你为 `match` 操作中要做的匹配设置特定控制选项。可用选项包括：

    - `ignoreSearch`: 一个 {{domxref("Boolean")}} 值用来设置匹配操作是否忽略 url 中的 query 部分。如果该参数设置为 `true` ，那么 `http://foo.com/?value=bar` 中的 `?value=bar` 部分就会在匹配中被忽略。该选项默认为 `false`。
    - `ignoreMethod`: 一个 {{domxref("Boolean")}} 值，如果设置为 `true`在匹配时就不会验证 {{domxref("Request")}} 对象的`http` 方法 (通常只允许是 `GET` 或 `HEAD` 。) 该参数默认值为 `false`。
    - `ignoreVary`: 一个 {{domxref("Boolean")}} 值，该值如果为 `true` 则匹配时不进行 `VARY` 部分的匹配。例如，如果一个 URL 匹配，此时无论{{domxref("Response")}}对象是否包含`VARY`头部，都会认为是成功匹配。该参数默认为 `false`。
    - `cacheName`: 一个 {{domxref("DOMString")}} ，代表一个具体的要被搜索的缓存。注意该选项被 **`Cache.matchAll()`** 方法忽略。

## 示例

```js
caches.open("v1").then(function (cache) {
  cache.matchAll("/images/").then(function (response) {
    response.forEach(function (element, index, array) {
      cache.delete(element);
    });
  });
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
