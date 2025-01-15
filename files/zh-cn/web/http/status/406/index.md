---
title: 406 Not Acceptable
slug: Web/HTTP/Status/406
---

{{HTTPSidebar}}

HTTP **`406 Not Acceptable`** [客户端错误响应](/zh-CN/docs/Web/HTTP/Status#客户端错误响应)状态码表示服务器无法根据请求的[主动内容协商](/zh-CN/docs/Web/HTTP/Content_negotiation#服务端驱动型内容协商机制)标头中定义的可接受值的列表产生匹配的响应，并且服务器不愿意提供默认表示。

主动内容协商标头包括：

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}

实际上，这种错误极少使用。服务器不应使用此错误代码响应，因为它对终端用户来说很难理解和修复，而是忽略相关的标头并向用户提供实际页面。假设即使用户不完全满意，他们也会更喜欢这种情况，而不是错误代码。

如果服务器返回了这个错误状态码，那么消息体中应该包含所能提供的资源表现形式的列表，允许用户手动进行选择。

## 状态

```http
406 Not Acceptable
```

## 规范

{{Specifications}}

## 参见

- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Status)
- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}
- HTTP [内容协商](/zh-CN/docs/Web/HTTP/Content_negotiation)
