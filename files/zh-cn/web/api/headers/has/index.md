---
title: Headers.has()
slug: Web/API/Headers/has
---

{{APIRef("Fetch")}}

{{domxref("Headers")}} 接口的 **`has()`**方法返回一个布尔值来声明一个 `Headers`对象 是否包含特定的头信息。

考虑到安全因素，一些头信息只能被 user agent 来管理。这些头信息包括{{Glossary("Forbidden_header_name", "forbidden header names", 1)}} 和{{Glossary("Forbidden_response_header_name", "forbidden response header names", 1)}}.

## Syntax

```js
myHeaders.has(name);
```

### Parameters

- _name_
  - : 你要测试的 HTTP 头字段的名称。如果给出的名称不在 HTTP 头中，将爬出异常{{jsxref("TypeError")}}。

### Returns

A {{domxref("Boolean")}}.

## Example

创建一个空的 Headers 对象是简单的：

```js
var myHeaders = new Headers(); // Currently empty
```

你可以使用 {{domxref("Headers.append")}} 来向 myHeaders 添加一个头信息，然后使用 `has()` 方法来测试是否添加成功：

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.has("Content-Type"); // Returns true
myHeaders.has("Accept-Encoding"); // Returns false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
