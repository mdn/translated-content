---
title: Cache.keys()
slug: Web/API/Cache/keys
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

{{domxref("Cache")}} 接口的 **`keys()`** 方法返回一个 {{jsxref("Promise")}} ，这个 {{jsxref("Promise")}} 将解析为一个{{domxref("Cache")}} 键的数组。

请求将以它们被插入的顺序返回。

> **备注：** 具有相同 URL 但不同请求头的请求，如果它们的响应头中有 VARY 头部，则他们可以被返回。

## 语法

```js
cache.keys(request, { options }).then(function (keys) {
  //do something with your array of requests
});
```

### 返回值

返回一个解析为 {{domxref("Cache")}} 键数组的 {{jsxref("Promise")}}。

### 参数

- request {{optional_inline}}
  - : 如果一个相关键被指定，则返对应的 {{domxref("Request")}} 。
- options {{optional_inline}}

  - : 一个对象，它的属性决定了 keys 操作中的匹配操作是如何执行的。可选的属性有：

    - `ignoreSearch`: 一个 {{domxref("Boolean")}} 值，指定了匹配操作是否忽略 url 中的查询部分。如果为 true，在执行匹配操作时， `http://foo.com/?value=bar` 的 `?value=bar` 部分将会被忽。默认为 `false`。
    - `ignoreMethod`: 一个 {{domxref("Boolean")}} 值，当为 true 时，将会阻止匹配操作验证 {{domxref("Request")}} 的 HTTP 方法（通常只有 GET 和 HEAD 方法被允许）。默认为 false。
    - `ignoreVary`: 一个 {{domxref("Boolean")}} 值，当为 `true 时，告诉匹配操作不要验证 VARY 头部。换句话说，如果 URL 匹配，你会得到一个匹配而不管` {{domxref("Response")}} 对象是否有 VARY 头部。默认为 false。
    - `cacheName`: 一个 {{domxref("DOMString")}} 值，描述了在一个特定的 cache 中进行匹配。注意这个选项会被 Cache.keys() 方法忽略。

## 示例

```js
caches.open("v1").then(function (cache) {
  cache.keys().then(function (keys) {
    keys.forEach(function (request, index, array) {
      cache.delete(request);
    });
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
