---
title: Upgrade-Insecure-Requests
slug: Web/HTTP/Headers/Upgrade-Insecure-Requests
---

{{HTTPSidebar}}

**`Upgrade-Insecure-Requests`** 是一个请求首部，用来向服务器端发送信号，表示客户端优先选择加密及带有身份验证的响应，并且它可以成功处理 {{CSP("upgrade-insecure-requests")}} [CSP](/zh-CN/docs/Web/Security/CSP) 指令。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## 语法

```plain
Upgrade-Insecure-Requests: 1
```

## 示例

客户端向服务器端发送信号表示它支持 {{CSP("upgrade-insecure-requests")}} 的升级机制：

```plain
GET / HTTP/1.1
Host: example.com
Upgrade-Insecure-Requests: 1
```

服务器现在可以重定向到这个站点的安全版本。在响应中可以添加一个 {{HTTPHeader("Vary")}} 首部，这样的话，响应就不会被缓存服务器提供给不支持升级机制的客户端了。

```plain
Location: https://example.com/
Vary: Upgrade-Insecure-Requests
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("upgrade-insecure-requests")}} directive
