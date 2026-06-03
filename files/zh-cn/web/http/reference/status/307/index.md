---
title: 307 Temporary Redirect
slug: Web/HTTP/Reference/Status/307
---

{{Glossary("HTTP")}} **`307 Temporary Redirect`**，临时重定向响应状态码，表示请求的资源暂时地被移动到了响应的 {{HTTPHeader("Location")}} 首部所指向的 URL 上。

原始请求中的请求方法和消息主体会在重定向请求中被重用。在确实需要将重定向请求的方法转换为 {{HTTPMethod("GET")}} 的场景下，可以考虑使用 {{HTTPStatus("303", "303 See Other")}} 状态码。例如，在使用 {{HTTPMethod("PUT")}} 方法进行文件上传操作时，如果需要返回一条确认信息（例如“你已经成功上传了 XYZ”），而不是返回上传的资源本身，就可以使用这个状态码。

状态码 `307` 与 {{HTTPStatus("302")}} 之间的唯一区别在于，当发送重定向请求的时候，`307` 状态码可以确保请求方法和消息主体不会发生变化。如果使用 `302` 响应状态码，一些旧客户端会错误地将请求方法转换为 {{HTTPMethod("GET")}}：也就是说，在 Web 中，如果使用了 `GET` 以外的请求方法，且返回了 `302` 状态码，则重定向后的请求方法是不可预测的；但如果使用 `307` 状态码，之后的请求方法就是可预测的。对于 `GET` 请求来说，两种情况没有区别。

## 状态码

```plain
307 Temporary Redirect
```

## 规范

{{Specifications}}

## 参见

- {{HTTPStatus("302", "302 Found")}}, the equivalent of this status code, but that may change the method used when it is not a {{HTTPMethod("GET")}}.
- {{HTTPStatus("303", "303 See Other")}}, a temporary redirect that changes the method used to {{HTTPMethod("GET")}}.
- {{HTTPStatus("301", "301 Moved Permanently")}}, a permanent redirect
