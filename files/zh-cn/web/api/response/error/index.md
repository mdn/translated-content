---
title: Response.error()
slug: Web/API/Response/error
---

{{APIRef("Fetch")}}

{{domxref("Response")}} 接口的`error()`方法返回一个包含网络错误相关信息的新`Response`对象

> **备注：** 这主要与 Service Workers 有关；如果您愿意，可以使用 error 方法返回错误。错误响应的{{domxref("Response.type","type")}} 被设置为 error。

> **备注：** 一个“错误”的响应不会真正地暴露给脚本：对 {{domxref("GlobalFetch.fetch","fetch()")}} 的“错误”响应将会返回 promise 的 reject 状态。

## 语法

```
var errorResponse = Response.error();
```

### 参数

无

### 返回值

一个 {{domxref("Response")}} 对象

## 示例

TBD (does not yet appear to be supported anywhere).

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
