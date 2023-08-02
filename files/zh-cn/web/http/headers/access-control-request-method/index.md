---
title: Access-Control-Request-Method
slug: Web/HTTP/Headers/Access-Control-Request-Method
---

{{HTTPSidebar}}请求头 **`Access-Control-Request-Method`** 出现于 {{glossary("preflight request")}}（预检请求）中，用于通知服务器在真正的请求中会采用哪种 [HTTP 方法](/zh-CN/docs/Web/HTTP/Methods)。因为预检请求所使用的方法总是 {{HTTPMethod("OPTIONS")}} ，与实际请求所使用的方法不一样，所以这个请求头是必要的。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | yes                            |

## 语法

```plain
Access-Control-Request-Method: <method>
```

## 指令

- \<method>
  - : 一种 [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Methods), 例如 {{HTTPMethod("GET")}}、{{HTTPMethod("POST")}} 或 {{HTTPMethod("DELETE")}}。

## 示例

```plain
Access-Control-Request-Method: POST
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("Access-Control-Request-Headers")}}
