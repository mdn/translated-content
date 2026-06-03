---
title: XMLHttpRequest.open()
slug: Web/API/XMLHttpRequest/open
---

{{APIRef('XMLHttpRequest')}}

**XMLHttpRequest.open()** 方法初始化一个新创建的请求，或重新初始化一个请求。

> [!NOTE]
> 为已激活的请求调用此方法（`open()`或`openRequest()` 已被调用）相当于调用`abort()`。

## 语法

```js
xhrReq.open(method, url);
xhrReq.open(method, url, async);
xhrReq.open(method, url, async, user);
xhrReq.open(method, url, async, user, password);
```

### 参数

- `method`
  - : 要使用的 HTTP 方法，比如 `GET`、`POST`、`PUT`、`DELETE`、等。对于非 HTTP(S) URL 被忽略。
- `url`
  - : 一个 {{domxref("DOMString")}} 表示要向其发送请求的 URL。
- `async` {{optional_inline}}
  - : 一个可选的布尔参数，表示是否异步执行操作，默认为 `true`。如果值为 `false`，`send()` 方法直到收到答复前不会返回。如果 `true`，已完成事务的通知可供事件监听器使用。如果 `multipart` 属性为 `true` 则这个必须为 `true`，否则将引发异常。

    > [!NOTE]
    > 主线程上的同步请求很容易破坏用户体验，应该避免；实际上，许多浏览器已完全弃用主线程上的同步 XHR 支持。在 {{domxref("Worker")}} 中允许同步请求

- `user` {{optional_inline}}
  - : 可选的用户名用于认证用途；默认为 `null`。
- `password` {{optional_inline}}
  - : 可选的密码用于认证用途，默认为 `null`。

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

[使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
