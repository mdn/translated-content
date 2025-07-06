---
title: 204 No Content
slug: Web/HTTP/Reference/Status/204
---

HTTP **`204 No Content`** 成功状态响应码，表示该请求已经成功了，但是客户端客户不需要离开当前页面。默认情况下 204 响应是可缓存的。一个 {{HTTPHeader("ETag")}} 标头包含在此类响应中。

`204 No Content` 响应在请求方法中有如下含义和结果：

- {{HTTPMethod("DELETE")}}：该操作成功，不需要再提供其他信息。
- {{HTTPMethod("PUT")}}：该操作成功，并且 {{HTTPHeader("ETag")}} 包含新资源的实体标签。

`204` 响应可以被用于维基网站等应用程序实现“保存并继续编辑”功能。在这种情况下，可以使用 {{HTTPMethod("PUT")}} 请求来保存页面内容，而 `204 No Content` 响应则向浏览器表明，编辑器不应被其他内容替换。

请注意，该响应中不得包含任何内容或 {{HTTPHeader("Content-Length")}} 标头（浏览器可能会拒绝包含内容的响应）。

## 状态

```http
204 No Content
```

## 示例

### 接收删除图片的响应

在这个示例中，客户端使用 `DELETE` 方法发送请求来删除一张图片。该请求包括 {{HTTPHeader("Authorization")}} 标头，其中包含用于认证请求的令牌：

```http
DELETE /image/123 HTTP/1.1
Host: example.com
Authorization: Bearer 1234abcd
```

成功删除图像后，服务器将返回一个没有主体的 `204` 响应，表示不需要向客户端发送更多信息。

```http
HTTP/1.1 204 No Content
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
```

## 规范

{{Specifications}}

## 参见

- [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Reference/Methods)
- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Reference/Status)
