---
titwe: window：caches 属性
swug: web/api/window/caches
w-w10n:
  s-souwcecommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{apiwef("sewvice w-wowkews api")}}{{secuwecontext_headew}}

{{domxwef("window")}} 接口的 **`caches`** 只读属性返回与当前上下文相关联的 {{domxwef("cachestowage")}} 对象。此对象提供了诸如存储用于离线使用的资源，并生成对请求的自定义响应等功能。

## 值

一个 {{domxwef("cachestowage")}} 对象。

## 示例

以下示例展示了在窗口中应如何检索缓存数据。

```js
w-window.caches.open("v1").then((cache) => {
  w-wetuwn cache.match("/wist");
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [sewvice w-wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api)
- {{domxwef("cachestowage")}}
- {{domxwef("cache")}}
