---
title: 302 Found
slug: Web/HTTP/Reference/Status/302
l10n:
  sourceCommit: 6d81ba6606ce5473cadd085c37eaf4960e99a238
---

**`302 Found`** [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Reference/Status#重定向消息)表示请求的资源已临时移动到 {{HTTPHeader("Location")}} 标头中的 URL。

浏览器收到此状态后，将自动请求 `Location` 标头中的 URL 资源，将用户重定向到新页面。搜索引擎收到此响应后，不会将原始 URL 的链接归属于新资源，这意味着不会将任何 {{Glossary("SEO")}} 值传递给新 URL。

> [!NOTE]
> 在 [Fetch 标准](https://fetch.spec.whatwg.org/#http-redirect-fetch)中，当用户代理收到对 {{HTTPMethod("POST")}} 请求的 `302` 响应时，它会在随后的重定向请求中使用 {{HTTPMethod("GET")}} 方法，这是 HTTP [规范](#规范)允许的。为了避免用户代理修改请求，请改用 {{HTTPStatus("307", "307 Temporary Redirect")}}，因为在 `307` 响应后方法变换是明确禁止的。
>
> 在确实需要将重定向请求的方法转换为 {{HTTPMethod("GET")}} 的场景下，可以使用 {{HTTPStatus("303", "303 See Other")}}。例如在使用 {{HTTPMethod("PUT")}} 方法进行文件上传操作时，需要返回确认信息（例如“你已经成功上传了 xyz”）而不是上传的资源本身，就可以使用这个状态码。

## 状态

```http
302 Found
```

## 示例

### 带有新 URL 的 302 响应

```http
GET /profile HTTP/1.1
Host: www.example.com
```

```http
HTTP/1.1 302 Found
Location: https://www.example.com/new-profile-url
Content-Type: text/html; charset=UTF-8
Content-Length: 0
```

## 规范

{{Specifications}}

## 参见

- [HTTP 的重定向](/zh-CN/docs/Web/HTTP/Guides/Redirections)
- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("307", "307 Temporary Redirect")}}，相当于 `302`，但请求方法未作修改。
- {{HTTPStatus("303", "303 See Other")}}，临时重定向，并将方法更改为 {{HTTPMethod("GET")}}
- {{HTTPStatus("301", "301 Moved Permanently")}}，永久重定向。
