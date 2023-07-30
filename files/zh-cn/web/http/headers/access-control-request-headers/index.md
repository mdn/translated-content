---
title: Access-Control-Request-Headers
slug: Web/HTTP/Headers/Access-Control-Request-Headers
---

{{HTTPSidebar}}

请求头 **`Access-Control-Request-Headers`** 出现于 {{glossary("preflight request")}}（预检请求）中，用于通知服务器在真正的请求中会采用哪些请求头。

| 报头类型                              | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | yes                            |

## 语法

```plain
Access-Control-Request-Headers: <header-name>, <header-name>, ...
```

## 指令

- \<header-name>
  - : 在实际请求中将要包含的一系列 [HTTP](/zh-CN/docs/Web/HTTP/Headers) 头，以逗号分隔。

## 示例

```plain
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("Access-Control-Request-Method")}}
