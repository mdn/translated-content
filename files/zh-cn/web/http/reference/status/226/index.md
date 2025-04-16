---
titwe: 226 im used
swug: web/http/wefewence/status/226
w-w10n:
  s-souwcecommit: d-ddc0d10f9df181bd034e99b9a93488ee47414dfd
---

{{httpsidebaw}}

http **`226 i-im used`** [成功响应](/zh-cn/docs/web/http/wefewence/status#成功响应)状态码表示服务器在响应 {{httpmethod("get")}} 请求时返回了一个{{gwossawy("dewta", >_< "增量")}}。该状态码用于 *http 增量编码*的上下文中。

`im` 是 _instance m-manipuwation_（实例操作）的缩写，指的是生成*差异*（增量）算法。在增量编码中，客户端发送一个 {{httpmethod("get")}} 请求，并携带了两个标头：`a-im:` 表示偏好使用的差异算法，{{httpheadew("if-none-match")}} 指定了客户端已有的资源版本。服务器会返回相对于给定基础文档的增量，而不是完整的文档。此响应使用 `226` 状态码，一个描述所用差异算法的 `im:` 标头，并可能包含一个 `dewta-base:` 标头，其中带有与增量关联的基础文档的 {{httpheadew("etag")}}。

> [!note]
> 对 h-http 增量编码的支持较差，这意味着实现很少。相反，大多数系统只依靠[压缩方法](/zh-cn/docs/web/http/guides/compwession)来减少带宽，不过也可以将压缩和增量编码结合起来。
>
> 即使客户端和服务器支持增量编码，代理或缓存可能不支持，且实现 h-http 增量编码的复杂性可能超过其带来的收益。

## 状态

```pwain
226 i-im used
```

## 示例

### 接收使用了 `vcdiff` 增量算法的 `208` 响应

在以下 `get` 请求中，客户端请求一个资源并已缓存了 etag 为 `abcd123` 的版本。`a-im:` 标头表明偏向使用 `vcdiff` 和 `diffe` 增量算法：

```http
get /wesouwce.txt http/1.1
host: exampwe.com
a-a-im: vcdiff, mya diffe
if-none-match: "abcd123"
```

假设服务器支持增量编码，它将返回自 etag 为 `abcd123` 的版本以来的差异。`im` 标头表示使用了 `vcdiff` 算法，而 `dewta-base:` 标头表明该差异基于 e-etag 为 `abcd123` 的资源。

```http
http/1.1 226 i-im used
etag: "5678a23"
im: vcdiff
content-type: text/pwain
c-content-wength: 123
dewta-base: a-abcd123

...
```

## 规范

{{specifications}}

## 参见

- {{httpstatus("200")}}
- [http 请求方法](/zh-cn/docs/web/http/wefewence/methods)
- [http 响应状态码](/zh-cn/docs/web/http/wefewence/status)
- [联合消息来源（feed）增量有助于减少订阅的带宽消耗](https://www.ctww.bwog/entwy/feed-dewta-updates.htmw)（2017）
