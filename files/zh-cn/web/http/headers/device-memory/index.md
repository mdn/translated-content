---
title: Device-Memory
slug: Web/HTTP/Headers/Device-Memory
---

{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

**`Device-Memory`** 是一个跟 [Device Memory API](/zh-CN/docs/Web/API/Device_Memory_API) 相关的请求头，它跟 [Client Hints](/zh-CN/docs/Glossary/Client_hints) 请求头的作用相似，用来表示客户端设备内存的近似大小。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | ?                              |

> **备注：** Client Hints are accessible only on secure origins (via TLS). Server has to opt in to receive `Device-Memory` header from the client by sending {{HTTPHeader("Accept-CH")}} and {{HTTPHeader("Accept-CH-Lifetime")}} response headers.

## 语法

设备的内存大小可能会被用作指纹变量，因此将这个取值设置的比较粗糙，以减少滥用它的可能性。请求头采用以下值：0.25、0.5、1、2、4、8。

```plain
Device-Memory: <number>
```

## 示例

服务器需要先发送包含 `Device-Memory` 的 {{HTTPHeader("Accept-CH")}} 和 {{HTTPHeader("Accept-CH-Lifetime")}} 响应头，来表明可以接收 `Device-Memory` 请求头。

```plain
Accept-CH: Device-Memory
Accept-CH-Lifetime: 86400
```

接下来客户端发送的请求则可能会包含 `Device-Memory` 请求头：

```plain
Device-Memory: 1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Device Memory API](/zh-CN/docs/Web/API/Device_Memory_API)
- {{HTTPHeader("Accept-CH")}}
- {{HTTPHeader("Accept-CH-Lifetime")}}
- {{HTTPHeader("Vary")}}
- {{DOMxRef("Navigator.deviceMemory")}}
