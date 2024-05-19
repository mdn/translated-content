---
title: Window：caches 属性
slug: Web/API/Window/caches
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{securecontext_header}}

{{domxref("Window")}} 接口的 **`caches`** 只读属性返回与当前上下文相关联的 {{domxref("CacheStorage")}} 对象。此对象提供了诸如存储用于离线使用的资源，并生成对请求的自定义响应等功能。

## 值

一个 {{domxref("CacheStorage")}} 对象。

## 示例

以下示例展示了在窗口中应如何检索缓存数据。

```js
window.caches.open("v1").then((cache) => {
  return cache.match("/list");
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
