---
title: 406 Not Acceptable
slug: Web/HTTP/Status/406
---

{{HTTPSidebar}}

HTTP 协议中的 **`406 Not Acceptable`** 状态码表示客户端错误，指代服务器端无法提供与 {{HTTPHeader("Accept-Charset")}} 以及 {{HTTPHeader("Accept-Language")}} 消息头指定的值相匹配的响应。

主动内容协商标头包括：

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}

实际上，这种错误极少使用。服务器不应使用此错误代码响应，因为它对终端用户来说很难理解和修复，而是忽略相关的标头并向用户提供实际页面。假设即使用户不完全满意，他们也会更喜欢这种情况，而不是错误代码。

如果服务器返回了这个错误状态码，那么消息体中应该包含所能提供的资源表现形式的列表，允许用户手动进行选择。

## 状态

```plain
406 Not Acceptable
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Accept-Language")}}
- {{HTTPHeader("Accept-Charset")}}
- HTTP [内容协商](/zh-CN/docs/Web/HTTP/Content_negotiation)
