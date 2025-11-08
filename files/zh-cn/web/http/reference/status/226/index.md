---
title: 226 IM Used
slug: Web/HTTP/Reference/Status/226
l10n:
  sourceCommit: ddc0d10f9df181bd034e99b9a93488ee47414dfd
---

HTTP **`226 IM Used`** [成功响应](/zh-CN/docs/Web/HTTP/Reference/Status#成功响应)状态码表示服务器在响应 {{HTTPMethod("GET")}} 请求时返回了一个{{Glossary("delta", "增量")}}。该状态码用于 *HTTP 增量编码*的上下文中。

`IM` 是 _instance manipulation_（实例操作）的缩写，指的是生成*差异*（增量）算法。在增量编码中，客户端发送一个 {{HTTPMethod("GET")}} 请求，并携带了两个标头：`A-IM:` 表示偏好使用的差异算法，{{HTTPHeader("If-None-Match")}} 指定了客户端已有的资源版本。服务器会返回相对于给定基础文档的增量，而不是完整的文档。此响应使用 `226` 状态码，一个描述所用差异算法的 `IM:` 标头，并可能包含一个 `Delta-Base:` 标头，其中带有与增量关联的基础文档的 {{HTTPHeader("ETag")}}。

> [!NOTE]
> 对 HTTP 增量编码的支持较差，这意味着实现很少。相反，大多数系统只依靠[压缩方法](/zh-CN/docs/Web/HTTP/Guides/Compression)来减少带宽，不过也可以将压缩和增量编码结合起来。
>
> 即使客户端和服务器支持增量编码，代理或缓存可能不支持，且实现 HTTP 增量编码的复杂性可能超过其带来的收益。

## 状态

```plain
226 IM Used
```

## 示例

### 接收使用了 `vcdiff` 增量算法的 `208` 响应

在以下 `GET` 请求中，客户端请求一个资源并已缓存了 ETag 为 `abcd123` 的版本。`A-IM:` 标头表明偏向使用 `vcdiff` 和 `diffe` 增量算法：

```http
GET /resource.txt HTTP/1.1
Host: example.com
A-IM: vcdiff, diffe
If-None-Match: "abcd123"
```

假设服务器支持增量编码，它将返回自 ETag 为 `abcd123` 的版本以来的差异。`IM` 标头表示使用了 `vcdiff` 算法，而 `Delta-Base:` 标头表明该差异基于 ETag 为 `abcd123` 的资源。

```http
HTTP/1.1 226 IM Used
ETag: "5678a23"
IM: vcdiff
Content-Type: text/plain
Content-Length: 123
Delta-Base: abcd123

...
```

## 规范

{{Specifications}}

## 参见

- {{HTTPStatus("200")}}
- [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Reference/Methods)
- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Reference/Status)
- [联合消息来源（feed）增量有助于减少订阅的带宽消耗](https://www.ctrl.blog/entry/feed-delta-updates.html)（2017）
