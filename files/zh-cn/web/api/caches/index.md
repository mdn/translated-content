---
title: caches
slug: Web/API/caches
---

{{APIRef("Service Workers API")}}

全局的 **`caches`** 只读属性返回与当前上下文紧密相关的 {{domxref("CacheStorage")}} 对象。此对象激活了诸如存储用于离线使用的资源，并生成对请求的自定义响应等功能。

{{securecontext_header}}

## 值

一个 {{domxref("CacheStorage")}} 对象。

## 示例

以下示例展示了你在 [service worker](/zh-CN/docs/Web/API/Service_Worker_API) 上下文中应该如何运用 cache 对资源进行离线存储。

```js
this.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("v1").then(function (cache) {
      return cache.addAll([
        "/sw-test/",
        "/sw-test/index.html",
        "/sw-test/style.css",
        "/sw-test/app.js",
        "/sw-test/image-list.js",
        "/sw-test/star-wars-logo.jpg",
        "/sw-test/gallery/",
        "/sw-test/gallery/bountyHunters.jpg",
        "/sw-test/gallery/myLittleVader.jpg",
        "/sw-test/gallery/snowTroopers.jpg",
      ]);
    }),
  );
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API)
- [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API)
- {{domxref("CacheStorage")}}
- {{domxref("Cache")}}
