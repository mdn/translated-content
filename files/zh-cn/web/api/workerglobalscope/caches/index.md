---
title: WorkerGlobalScope：caches 属性
slug: Web/API/WorkerGlobalScope/caches
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{securecontext_header}}

{{domxref("WorkerGlobalScope")}} 接口的 **`caches`** 只读属性返回与当前上下文相关联的 {{domxref("CacheStorage")}} 对象。此对象提供了诸如存储用于离线使用的资源，并生成对请求的自定义响应等功能。

## 值

一个 {{domxref("CacheStorage")}} 对象。

## 示例

以下示例展示了在 [service worker](/zh-CN/docs/Web/API/Service_Worker_API) 上下文中应该如何运用缓存对资源进行离线存储。

```js
self.addEventListener("install", (event) => {
  event.waitUntil(
    self.caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/app.js",
          "/image-list.js",
          "/star-wars-logo.jpg",
          "/gallery/",
          "/gallery/bountyHunters.jpg",
          "/gallery/myLittleVader.jpg",
          "/gallery/snowTroopers.jpg",
        ]),
      ),
  );
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API)
- {{domxref("CacheStorage")}}
- {{domxref("Cache")}}
