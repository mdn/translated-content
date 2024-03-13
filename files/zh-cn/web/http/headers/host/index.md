---
title: Host
slug: Web/HTTP/Headers/Host
---

{{HTTPSidebar}}

**Host** 请求头指明了请求将要发送到的服务器主机名和端口号。

如果没有包含端口号，会自动使用被请求服务的默认端口（比如 HTTPS URL 使用 443 端口，HTTP URL 使用 80 端口）。

所有 HTTP/1.1 请求报文中必须包含一个`Host`头字段。对于缺少`Host`头或者含有超过一个`Host`头的 HTTP/1.1 请求，可能会收到{{HTTPStatus("400")}}（Bad Request）状态码。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | yes                            |

## 语法

```plain
Host: <host>:<port>
```

## 指令

- \<host>
  - : 服务器的域名（用于虚拟主机）。
- \<port> {{optional_inline}}
  - : 服务器监听的 TCP 端口号。

## 示例

```plain
Host: developer.mozilla.org
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{HTTPStatus("400")}}
- {{HTMLElement("base")}}
