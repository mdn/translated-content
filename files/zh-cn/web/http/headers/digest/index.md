---
title: Digest
slug: Web/HTTP/Headers/Digest
---

{{HTTPSidebar}}

**`Digest`** 响应 HTTP 头提供了请求资源一个 {{Glossary("摘要")}} 。

在 [RFC 7231](https://tools.ietf.org/html/rfc7231) 术语中，它是一个资源的选定表示。这个选定代表依赖于 [`Content-Type`](/zh-CN/docs/Web/HTTP/Headers/Content-Type) 和 [`Content-Encoding`](/zh-CN/docs/Web/HTTP/Headers/Content-Encoding) 头部值：所以一个单一的资源可能有多个不同的摘要值。

摘要是整个表示的计算。这个表示可以是：

- 完全包含在响应消息体中
- 完全不包含在消息体中中 (例如，在一个 [`HEAD`](/zh-CN/docs/Web/HTTP/Methods/HEAD) 请求的响应中)
- 部分包含在消息体中 (例如，在一个 [range request](/zh-CN/docs/Web/HTTP/Range_requests) 的响应中)。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
Digest: <digest-algorithm>=<digest-value>

Digest: <digest-algorithm>=<digest-value>,<digest-algorithm>=<digest-value>
```

## 指令

- `<digest-algorithm>`
  - : 已支持的摘要算法在 [RFC 3230](https://tools.ietf.org/html/rfc3230) 和 [RFC 5843](https://tools.ietf.org/html/rfc5843),中定义，包括 `SHA-256` 和 `SHA-512`。一些支持的算法 (如 `unixsum` 和 `MD5`) 容易发生冲突，因此不适合冲突阻力很重要的应用。
- `<digest-value>`
  - : 对资源表示的摘要算法的结果和编码的结果。摘要算法的选择决定了编码类型：例如 `SHA-256` 用 base64 编码。

## 示例

```plain
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=,unixsum=30637
```

## 规范

{{Specifications}}

该头最初在 [RFC 3230](https://tools.ietf.org/html/rfc3230) 中定义，但在 [RFC 7231](https://www.rfc-editor.org/info/rfc7231) 里的 "选中的表示" 定义使原始定与当前 HTTP 规范中不一致。发布时，"HTTP 资源摘要" 草案将废弃 RFC 3230 并将更新标准以保持一致。

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Want-Digest")}}
- [HTTP range requests](/zh-CN/docs/Web/HTTP/Range_requests)
- [`206 Partial Content`](/zh-CN/docs/Web/HTTP/Status/206)
