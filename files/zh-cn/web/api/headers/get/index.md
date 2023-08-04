---
title: Headers.get()
slug: Web/API/Headers/get
---

{{APIRef("Fetch")}}{{ SeeCompatTable() }}

**`get()`** 方法以 {{domxref("ByteString")}} 形式从 Headers 对象中返回指定 header 的全部值。如果 Header 对象中不存在请求的 header，则返回 `null`。

> **备注：** 出于安全原因，部分头信息只能被用户代理控制。这些头信息包括 {{Glossary("Forbidden_header_name", "forbidden header names", 1)}} 和 {{Glossary("Forbidden_response_header_name", "forbidden response header names", 1)}}。

## Syntax

```js
myHeaders.get(name);
```

### Parameters

- _name_
  - : 从 Headers 对象中检索的 HTTP header 名，如果 HTTP header 中不存在指定 header 名则会抛出一个{{jsxref("TypeError")}}.

### Returns

以 {{domxref("ByteString")}} 形式返回检索到的值。

## Example

创建一个空的 Headers 对象：

```js
var myHeaders = new Headers(); // Currently empty
```

可以通过 get() 方法来获取 header 中的值：

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Returns 'image/jpeg'
```

如果存在多个 header 值，那么只有第一个值会被返回：

```js
myHeaders.append("Accept-Encoding", "deflate");
myHeaders.append("Accept-Encoding", "gzip");
myHeaders.get("Accept-Encoding"); // Returns "deflate,gzip"
```

> **备注：** {{domxref("Headers.getAll")}} used to have this functionality, with {{domxref("Headers.get")}} returning only the first value added to the `Headers` object. The latest spec has removed `getAll()`, and updated `get()` to return all values.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
