---
title: If-None-Match
slug: Web/HTTP/Headers/If-None-Match
---

{{HTTPSidebar}}

**`If-None-Match`** 是一个条件式请求首部。对于 GET{{HTTPMethod("GET")}} 和 {{HTTPMethod("HEAD")}} 请求方法来说，当且仅当服务器上没有任何资源的 {{HTTPHeader("ETag")}} 属性值与这个首部中列出的相匹配的时候，服务器端才会返回所请求的资源，响应码为 {{HTTPStatus("200")}} 。对于其他方法来说，当且仅当最终确认没有已存在的资源的 {{HTTPHeader("ETag")}} 属性值与这个首部中所列出的相匹配的时候，才会对请求进行相应的处理。

对于 {{HTTPMethod("GET")}} 和 {{HTTPMethod("HEAD")}} 方法来说，当验证失败的时候，服务器端必须返回响应码 304（Not Modified，未改变）。对于能够引发服务器状态改变的方法，则返回 412（Precondition Failed，前置条件失败）。需要注意的是，服务器端在生成状态码为 304 的响应的时候，必须同时生成以下会存在于对应的 200 响应中的首部：Cache-Control、Content-Location、Date、ETag、Expires 和 Vary。

{{HTTPHeader("ETag")}} 属性之间的比较采用的是**弱比较算法**，即两个文件除了每个字节都相同外，内容一致也可以认为是相同的。例如，如果两个页面仅仅在页脚的生成时间有所不同，就可以认为二者是相同的。

当与 {{HTTPHeader("If-Modified-Since")}} 一同使用的时候，If-None-Match 优先级更高（假如服务器支持的话）。

以下是两个常见的应用场景：

- 采用 {{HTTPMethod("GET")}} 或 {{HTTPMethod("HEAD")}} 方法，来更新拥有特定的{{HTTPHeader("ETag")}} 属性值的缓存。
- 采用其他方法，尤其是 {{HTTPMethod("PUT")}}，将 `If-None-Match` used 的值设置为 \* ，用来生成事先并不知道是否存在的文件，可以确保先前并没有进行过类似的上传操作，防止之前操作数据的丢失。这个问题属于[更新丢失问题](https://www.w3.org/1999/04/Editing/#3.1)的一种。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## 语法

```plain
If-None-Match: <etag_value>
If-None-Match: <etag_value>, <etag_value>, …
If-None-Match: *
```

## 指令

- \<etag_value>
  - : 唯一地表示所请求资源的实体标签。形式是采用双引号括起来的由 ASCII 字符串（如"675af34563dc-tr34"），有可能包含一个 W/ 前缀，来提示应该采用弱比较算法（这个是画蛇添足，因为 If-None-Match 用且仅用这一算法）。
- `*`
  - : 星号是一个特殊值，可以代表任意资源。它只用在进行资源上传时，通常是采用 {{HTTPMethod("PUT")}} 方法，来检测拥有相同识别 ID 的资源是否已经上传过了。

## 示例

```plain
If-None-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-None-Match: W/"67ab43", "54ed21", "7892dd"

If-None-Match: *
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPStatus("304")}} `Not Modified`
- {{HTTPStatus("412")}} `Precondition Failed`
