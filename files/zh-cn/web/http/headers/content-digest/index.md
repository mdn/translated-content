---
title: Content-Digest
slug: Web/HTTP/Headers/Content-Digest
l10n:
  sourceCommit: a8f881645d776d1303a0a25bd884f95e1b2805e1
---

{{HTTPSidebar}}

HTTP **`Content-Digest`** {{Glossary("request header", "请求")}}和{{Glossary("response header", "响应标头")}}提供一个使用哈希算法计算的消息内容{{Glossary("digest", "摘要")}}。接收者可以使用 `Content-Digest` 来验证 HTTP 消息内容的完整性。

{{HTTPHeader("Want-Content-Digest")}} 字段允许发送者请求 `Content-Digest` 及其哈希算法偏好。内容摘要会根据 {{HTTPHeader("Content-Encoding")}} 和 {{HTTPHeader("Content-Range")}} 而有所不同，但不会受到 {{HTTPHeader("Transfer-Encoding")}} 的影响。

在某些情况下，{{HTTPHeader("Repr-Digest")}} 可用于验证完整表示中的部分或多部分消息的完整性。例如，在[范围请求](/zh-CN/docs/Web/HTTP/Range_requests)中，如果仅请求的字节范围不同，则 `Repr-Digest` 将始终具有相同的值，而内容摘要则对于每个部分而有所不同。因此，当表示在发送单个消息时，`Content-Digest` 与 {{HTTPHeader("Repr-Digest")}} 相同。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Request header", "请求标头")}}、{{Glossary("Response header", "响应标头")}}、{{Glossary("Representation header", "表示标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Content-Digest: <digest-algorithm>=<digest-value>

// Multiple digest algorithms
Content-Digest: <digest-algorithm>=<digest-value>,<digest-algorithm>=<digest-value>, …
```

## 指令

- `<digest-algorithm>`
  - : 用于创建消息内容摘要的算法。只有两种注册的摘要算法被认为是安全的：`sha-512` 和 `sha-256`。不安全（旧版）的注册摘要算法包括：`md5`、`sha`（SHA-1）、`unixsum`、`unixcksum`、`adler`（ADLER32）和 `crc32c`。
- `<digest-value>`
  - : 使用 `<digest-algorithm>` 对消息内容计算摘要后的字节序列。摘要算法的选择也决定了使用的编码类型：`sha-512` 和 `sha-256` 使用 {{Glossary("base64")}} 编码，而一些旧版摘要算法（如 `unixsum`）使用十进制整数。与规范的早期草案不同，标准的 base64 编码摘要字节序列被作为[字典语法](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences)的一部分包装在冒号（`:`，ASCII 0x3A）中

## 描述

以前的规范中定义了 `Digest` 标头，但事实证明它存在问题，因为摘要的应用范围不明确。具体来说，很难区分摘要是应用于整个资源还是应用于 HTTP 消息的特定内容。因此，规定了两个单独的标头（`Content-Digest` 和 `Repr-Digest`）来分别传达 HTTP 消息内容摘要和资源表示摘要。

## 示例

### 用户代理请求 SHA-256 Content-Digest

在以下示例中，用户代理请求对消息内容进行摘要（优先使用 SHA-256，其次为 SHA-1）：

```http
GET /items/123 HTTP/1.1
Host: example.com
Want-Content-Digest: sha-256=10, sha=3
```

服务器的响应带有消息内容的 `Content-Digest`（使用 SHA-256 算法）：

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:

{"hello": "world"}
```

### 相同的 Content-Digest 和 Repr-Digest 值

用户代理请求资源（不带有 `Want-Content-Digest` 字段）：

```http
GET /items/123 HTTP/1.1
Host: example.com
```

服务器配置为在响应中发送未经请求的摘要标头。`Repr-Digest` 和 `Content-Digest` 字段具有相匹配的值，因为它们使用相同的算法，且在本例中，整个资源在一条消息中发送：

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 19
Content-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:

{"hello": "world"}
```

### 不同的 Content-Digest 和 Repr-Digest 值

如果重复与上例相同的请求，但使用 {{HTTPMethod("HEAD")}} 方法来代替 {{HTTPMethod("GET")}}，则 `Repr-Digest` 和 `Content-Digest` 字段将不同：

```http
GET /items/123 HTTP/1.1
Host: example.com
```

`Repr-Digest` 值与上例相同，但因为消息正文为空，服务器将发送一个不同的 `Content-Digest`：

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
```

### 用户代理在请求中发送 Content-Digest

在以下示例中，用户代理发送消息内容的摘要（使用 SHA-512 算法）。它同时发送 `Content-Digest` 和 `Repr-Digest`，这两个摘要因为 `Content-Encoding` 而不同：

```http
POST /bank_transfer HTTP/1.1
Host: example.com
Content-Encoding: zstd
Content-Digest: sha-512=:ABC…=:
Repr-Digest: sha-512=:DEF…=:

{
 "recipient": "Alex",
 "amount": 900000000
}
```

服务器可以计算已接收内容的摘要，并将结果与 `Content-Digest` 或 `Repr-Digest` 标头进行比较，以验证消息的完整性。在类似上述示例的请求中，`Repr-Digest` 对服务器更为有用，因为它是根据解码后的表示计算出来的，在不同情况下会更加一致。

## 规范

{{Specifications}}

## 浏览器兼容性

此标头没有规范定义的浏览器集成（“浏览器兼容性”不适用）。开发者可以使用 `fetch()` 设置和获取 HTTP 标头以实现特定于应用程序的实现行为。

## 参见

- {{HTTPHeader("Want-Content-Digest")}} 标头用于请求内容摘要
- {{HTTPHeader("Repr-Digest")}}、{{HTTPHeader("Want-Repr-Digest")}} 表示摘要标头
- {{HTTPHeader("ETag")}}
- [用于 API 的 数字签名](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK 指南使用 `Content-Digest` 在 HTTP 调用中进行数字签名（developer.ebay.com）
