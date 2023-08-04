---
title: XMLHttpRequest.setRequestHeader()
slug: Web/API/XMLHttpRequest/setRequestHeader
---

{{APIRef('XMLHttpRequest')}}

**XMLHttpRequest.setRequestHeader()** 是设置 HTTP 请求头部的方法。此方法必须在 {{domxref("XMLHttpRequest.open", "open()")}} 方法和 {{domxref("XMLHttpRequest.send", "send()")}} 之间调用。如果多次对同一个请求头赋值，只会生成一个合并了多个值的请求头。

如果没有设置 {{HTTPHeader("Accept")}} 属性，则此发送出{{domxref("XMLHttpRequest.send", "send()")}} 的值为此属性的默认值：`*/*`。

安全起见，有些请求头的值只能由 user agent 设置：{{Glossary("Forbidden_header_name", "forbidden header names", 1)}} 和{{Glossary("Forbidden_response_header_name", "forbidden response header names", 1)}}。

> **备注：** 自定义一些 header 属性进行跨域请求时，可能会遇到"**not allowed by Access-Control-Allow-Headers in preflight response**"，你可能需要在你的服务端设置 "Access-Control-Allow-Headers"。

## 语法

```
myReq.setRequestHeader(header, value);
```

### 参数

- `header`
  - : 属性的名称。
- `value`
  - : 属性的值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

[使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
