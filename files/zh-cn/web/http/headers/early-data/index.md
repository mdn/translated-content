---
title: Early-Data
slug: Web/HTTP/Headers/Early-Data
---

{{SeeCompatTable}}{{HTTPSidebar}}

**`Early-Data`** 头（header）由某个中间者设置来表示请求已在 TLS early data 中传送，且表示 某个中间者理解 {{HTTPStatus("425", "425 (Too Early)")}} 状态码。**`Early-Data`** 头（header）不由请求的发起者设置 (例如，浏览器)。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## 语法

```plain
Early-Data: 1
```

## 示例

```plain
GET /resource HTTP/1.0
Host: example.com
Early-Data: 1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
