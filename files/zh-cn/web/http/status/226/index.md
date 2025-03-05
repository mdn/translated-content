---
title: 226 IM Used
slug: Web/HTTP/Status/226
---

{{HTTPSidebar}}

HTTP **`226 IM Used`** [成功响应](/zh-CN/docs/Web/HTTP/Status#successful_responses)状态代码表示服务器在响应 {{HTTPMethod("GET")}} 请求时返回了一个 {{Glossary("delta")}}。该状态码用于 HTTP delta 编码的上下文中。

`IM` 是 _instance manipulation_ 的缩写，指的是生成一个 _delta_ 算法。在 delta 编码中，客户端发送一个 {{HTTPMethod("GET")}} 请求，并携带了两个头部信息，`A-IM:` 表示偏好使用的差异算法，{{HTTPHeader("If-None-Match")}} 指定了客户端已有的资源版本。 服务器会返回相对于给定基础文档的增量，而不是完整的文档。 此响应使用 `226` 状态码，一个描述所用差异算法的 `IM:` 标头，并可能包含一个 `Delta-Base:` 标头，其中带有与 delta 关联的基础文档的 {{HTTPHeader("ETag")}}。

> [! NOTE]
> 对 HTTP delta 编码的支持较差，这意味着实现的情况很少。相反，大多数系统只依靠[压缩请求](/zh-CN/docs/Web/HTTP/Compression)来减少带宽，不过也可以将压缩和 delta 编码结合起来。即使客户端和服务器支持 delta 编码，代理或缓存可能不支持，且实现 HTTP 增量编码的复杂性可能超过其带来的收益。

## 状态

```plain
226 IM Used
```

## 示例

### 使用 `vcdiff` delta 算法接收 `208` 响应

在以下 `GET` 请求中，客户端请求一个资源并已缓存了 ETag 为 `abcd123` 的版本。`A-IM:` 表明客户端偏向使用 `vcdiff` and `diffe` Delta 算法：

```http
GET /resource.txt HTTP/1.1
Host: example.com
A-IM: vcdiff, diffe
If-None-Match: "abcd123"
```

假设服务器支持 delta 编码，它将返回自 ETag 为 `abcd123` 的版本以来的差异。`IM` 表示使用了 `vcdiff` 算法，且 `Delta-Base:` 表明该 Delta 基于 ETag 为 `abcd123` 的资源

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
- [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Methods)
- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Status)
