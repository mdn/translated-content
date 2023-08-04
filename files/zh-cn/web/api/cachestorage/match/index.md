---
title: CacheStorage.match()
slug: Web/API/CacheStorage/match
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

{{domxref("CacheStorage")}} 接口 (可适用于全局性`caches`) 的 **`match()`** 方法检查给定的{{domxref("Request")}} 对象或 url 字符串是否是一个已存储的 {{domxref("Response")}} 对象的 key. 这个方法针对 {{domxref("Response")}} 返回一个 {{jsxref("Promise")}} ，如果没有匹配则返回 `undefined` 。

cache 对象按创建顺序查询。

> **备注：** {{domxref("CacheStorage.match()", "caches.match()")}} 是一个便捷方法。其作用等同于在每个缓存上调用 {{domxref("cache.match()")}} 方法（按照{{domxref("CacheStorage.keys()", "caches.keys()")}}返回的顺序) 直到返回{{domxref("Response")}} 对象。

## 语法

```
caches.match(request, options).then(function(response) {
  // Do something with the response
});
```

### 参数

- request
  - : 想要匹配的 {{domxref("Request")}}。这个参数可以是 {{domxref("Request")}} 对象或 URL 字符串。
- options {{optional_inline}}

  - : 这个对象中的属性控制在匹配操作中如何进行匹配选择。可选择参数如下：

    - `ignoreSearch`: {{domxref("Boolean")}}值，指定匹配过程是否应该忽略 url 中查询参数。举个例子，如果该参数设置为`true`, 那么 `?value=bar` 作为 `http://foo.com/?value=bar` 中的查询参数将会在匹配过程中被忽略。该参数默认 `false`。
    - `ignoreMethod`: {{domxref("Boolean")}} 值，当被设置为 `true` 时，将会阻止在匹配操作中对 {{domxref("Request")}}请求的 `http` 方式的验证 (通常只允许 `GET` 和 `HEAD` 两种请求方式)。该参数默认为 `false`.
    - `ignoreVary`: {{domxref("Boolean")}} 值，当该字段被设置为 `true`, 告知在匹配操作中忽略对`VARY`头信息的匹配。换句话说，当请求 URL 匹配上，你将获取匹配的 {{domxref("Response")}} 对象，无论请求的 `VARY` 头存在或者没有。该参数默认为 `false`.
    - `cacheName`: {{domxref("DOMString")}} 值，表示所要搜索的缓存名称。

### 返回值

返回 resolve 为匹配 {{domxref("Response")}} 的 {{jsxref("Promise")}} 对象。如果没有与指定 request 相匹配 response，promise 将使用 `undefined` resolve.

## 例子

此示例来自于 MDN [sw-test example](https://github.com/mdn/sw-test/) （请参阅 [sw-test running live](https://mdn.github.io/sw-test/)）。这里，等待 {{domxref("FetchEvent")}} 事件触发。我们构建自定义响应，像这样：

1. 使用 {{domxref("CacheStorage.match","CacheStorage.match()")}} 检查 {{domxref("CacheStorage")}} 中是否存在匹配请求，如果存在，则使用它。
2. 如果没有，使用 `open()` 打开 `v1` cache，使用 {{domxref("Cache.put","Cache.put()")}} 将默认网络请求放入 cache 中，并只用 `return response.clone()` 返回默认网络请求的克隆副本。最后一个是必须的，因为 `put()` 使用响应主体。
3. 如果此操作失败（例如，因为网络已关闭），则返回备用响应。

```js
caches
  .match(event.request)
  .then(function (response) {
    return (
      response ||
      fetch(event.request).then(function (r) {
        caches.open("v1").then(function (cache) {
          cache.put(event.request, r);
        });
        return r.clone();
      })
    );
  })
  .catch(function () {
    return caches.match("/sw-test/gallery/myLittleVader.jpg");
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 亦可参考

- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches", "self.caches")}}
