---
title: XMLHttpRequest：setRequestHeader() 方法
slug: Web/API/XMLHttpRequest/setRequestHeader
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

{{domxref("XMLHttpRequest")}} 的方法 **`setRequestHeader()`** 设置 HTTP 请求头部的值。此方法必须在 {{domxref("XMLHttpRequest.open", "open()")}} 方法和 {{domxref("XMLHttpRequest.send", "send()")}} 之间调用。如果多次对同一个请求头赋值，只会生成一个合并了多个值的请求头。

在第一次调用 `setRequestHeader()` 之后的每次调用，指定文本会附加到存在的标头内容的末尾。

如果没有设置 {{HTTPHeader("Accept")}} 属性，则此发送出{{domxref("XMLHttpRequest.send", "send()")}} 的值为此属性的默认值：`*/*`。

安全起见，有些请求头的值只能由 user agent 设置：{{Glossary("Forbidden_header_name", "forbidden header names", 1)}}。任何从前端 JavaScript 代码尝试为其中一个标头设置值都将被忽略，不会出现警告或错误。

另外，[`Authorization`](/zh-CN/docs/Web/HTTP/Headers/Authorization) HTTP 标头可以添加到请求中，但如果请求被跨源重定向，则会被删除。

> **备注：** 自定义一些 header 属性进行跨域请求时，可能会遇到"**not allowed by Access-Control-Allow-Headers in preflight response**"，你可能需要在你的服务端设置 "Access-Control-Allow-Headers"。

## 语法

```js-nolint
setRequestHeader(header, value)
```

### 参数

- `header`
  - : 要设置的标头的名称。
- `value`
  - : 要设置的标头正文的值。

### 返回值

无 ({{jsxref("undefined")}})。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [XMLHttpRequest 中的 HTML](/zh-CN/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
