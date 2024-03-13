---
title: DPR
slug: Web/HTTP/Headers/DPR
---

{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

**`DPR`**请求头是“ [客户端提示”](/zh-CN/docs/Glossary/Client_hints)消息头，它代表客户端设备的像素比 ({{Glossary("DPR")}})，该比例是与每个 CSS 像素相对应的物理设备像素的数量。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | ?                              |

> **备注：** Client Hints are accessible only on secure origins (via TLS). Server has to opt in to receive `DPR` header from the client by sending {{HTTPHeader("Accept-CH")}} and {{HTTPHeader("Accept-CH-Lifetime")}} response headers.

## 语法

```plain
DPR: <number>
```

## 示例

Server first needs to opt in to receive `DPR` header by sending the response headers {{HTTPHeader("Accept-CH")}} containing `DPR` and {{HTTPHeader("Accept-CH-Lifetime")}}.

```plain
Accept-CH: DPR
Accept-CH-Lifetime: 86400
```

Then on subsequent requests the client might send `DPR` header back:

```plain
DPR: 1.0
```

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Accept-CH")}}
- {{HTTPHeader("Accept-CH-Lifetime")}}
- {{HTTPHeader("Vary")}}
