---
title: Allow
slug: Web/HTTP/Headers/Allow
---

{{HTTPSidebar}}

**`Allow`** 首部字段用于枚举资源所支持的 HTTP 方法的集合。

若服务器返回状态码 {{HTTPStatus("405")}} `Method Not Allowed`，则该首部字段亦需要同时返回给客户端。如果 `Allow` 首部字段的值为空，说明资源不接受使用任何 HTTP 方法的请求。这是可能的，比如服务器需要临时禁止对资源的任何访问。

| Header type                           | {{Glossary("Entity header")}} |
| ------------------------------------- | ----------------------------- |
| {{Glossary("Forbidden header name")}} | no                            |

## 语法

```plain
Allow: <http-methods>
```

## 声明

- \<http-methods>
  - : [HTTP](/zh-CN/docs/Web/HTTP/Methods) 请求方法的集合。

## 示例

```plain
Allow: GET, POST, HEAD
```

## 规范

{{Specifications}}

## 参见

- {{HTTPStatus("405")}}
- {{HTTPHeader("Server")}}
