---
title: Response.redirect()
slug: Web/API/Response/redirect_static
---

{{APIRef("Fetch")}}

{{domxref("Response")}} 接口的 **`redirect()`** 方法返回一个可以重定向到指定 URL 的 `Response` 。

> **备注：** 主要和 [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API) 有关。A controlling service worker could intercept a page's request and redirect it as desired. This will actually lead to a real redirect if a service worker sends it upstream.

## 语法

```
var response = Response.redirect(url, status);
```

### 参数

- `url`
  - : The URL that the new response is to originate from.
- `status` {{optional_inline}}
  - : 用于 response 的可选的状态码 (e.g., `302`.)

### 返回值

一个 {{domxref("Response")}} 对象。

### 异常

| 异常类型     | 说明                            |
| ------------ | ------------------------------- |
| `RangeError` | status 不是一个重定向的状态码。 |
| `TypeError`  | url 不可用。                    |

## 示例

```js
responseObj.redirect("https://www.example.com", 302);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP 访问控制 (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
