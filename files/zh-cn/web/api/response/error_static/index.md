---
title: Response.error()
slug: Web/API/Response/error_static
---

{{APIRef("Fetch")}}

{{domxref("Response")}} 接口的 `error()` 方法返回一个包含网络错误相关信息的新 `Response` 对象。

> **备注：** 这主要与 Service Workers 有关；如果你愿意，可以使用 error 方法返回错误。错误响应的 {{domxref("Response.type","type")}} 被设置为 `error`。

> **备注：** 一个“错误”的 `Response` 不会真正地暴露给脚本：例如 {{domxref("GlobalFetch.fetch","fetch()")}} 的“错误”响应将会返回 promise 的 reject 状态。

## 语法

```
error()
```

### 参数

无

### 返回值

一个 {{domxref("Response")}} 对象。

## 示例

待定（似乎还没有在任何地方得到支持）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
