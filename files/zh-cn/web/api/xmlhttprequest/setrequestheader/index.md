---
title: XMLHttpRequest：setRequestHeader() 方法
slug: Web/API/XMLHttpRequest/setRequestHeader
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

{{domxref("XMLHttpRequest")}} 的 **`setRequestHeader()`** 方法设置 HTTP 请求头部的值。此方法必须在 {{domxref("XMLHttpRequest.open", "open()")}} 方法和 {{domxref("XMLHttpRequest.send", "send()")}} 之间调用。如果多次对同一个请求头赋值，只会生成一个合并了多个值的请求头。

在第一次调用 `setRequestHeader()` 之后的每次调用，指定文本会附加到存在的标头内容的末尾。

如果没有设置 {{HTTPHeader("Accept")}} 标头，则在调用 {{domxref("XMLHttpRequest.send", "send()")}} 时，会随请求发送一个类型为 `"*/*"` 的 `Accept` 标头。

安全起见，有些{{Glossary("Forbidden_request_header", "禁止修改的请求标头")}}的值只能由用户代理控制。任何通过前端 JavaScript 代码为其中一个标头设置值的尝试都将被忽略，不会出现警告或错误。

另外，[`Authorization`](/zh-CN/docs/Web/HTTP/Reference/Headers/Authorization) HTTP 标头可以添加到请求中，但如果请求被跨源重定向，则会被删除。

> [!NOTE]
> 对于自定义字段，在跨域请求时可能遇到“**not allowed by Access-Control-Allow-Headers in preflight response**”异常，你可能需要在你的服务端设置 {{HTTPHeader("Access-Control-Allow-Headers")}}。

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

无（{{jsxref("undefined")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [XMLHttpRequest 中的 HTML](/zh-CN/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
