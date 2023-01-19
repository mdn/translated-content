---
title: 406 Not Acceptable
slug: Web/HTTP/Status/406
---

{{HTTPSidebar}}

HTTP 协议中的 **`406 Not Acceptable`** 状态码表示客户端错误，指代服务器端无法提供与 {{HTTPHeader("Accept-Charset")}} 以及 {{HTTPHeader("Accept-Language")}} 消息头指定的值相匹配的响应。

在实际应用中，这个错误状态码极少使用：不是给用户返回一个晦涩难懂（且难以更正）的错误状态码，而是将相关的消息头忽略，同时给用户提供一个看得见摸得着的页面。这种做法基于这样一个假设：即便是不能达到用户十分满意，也强于返回错误状态码。

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
