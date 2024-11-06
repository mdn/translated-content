---
title: 302 Found
slug: Web/HTTP/Status/302
---

{{HTTPSidebar}}

HTTP **`302 Found`** 重定向状态码表明请求的资源被暂时的移动到了由该 HTTP 响应的响应头 {{HTTPHeader("Location")}} 指定的 URL 上。浏览器会重定向到这个 URL，但是搜索引擎不会对该资源的链接进行更新 (In SEO-speak, it is said that the link-juice is not sent to the new URL)。

即使规范要求浏览器在重定向时保证请求方法和请求主体不变，但并不是所有的用户代理都会遵循这一点，你依然可以看到有缺陷的软件的存在。所以推荐仅在响应 {{HTTPMethod("GET")}} 或 {{HTTPMethod("HEAD")}} 方法时采用 302 状态码，而在其他时候使用 {{HTTPStatus("307")}} Temporary Redirect 来替代，因为在这些场景下方法变换是明确禁止的。

在确实需要将重定向请求的方法转换为 {{HTTPMethod("GET")}}的场景下，可以使用 {{HTTPStatus("303")}} See Other。例如在使用 {{HTTPMethod("PUT")}} 方法进行文件上传操作时，需要返回确认信息（例如“你已经成功上传了 xyz”）而不是上传的资源本身，就可以使用这个状态码。

## 状态

```plain
302 Found
```

## 规范

{{Specifications}}

## 参见

- {{HTTPStatus("307")}} `Temporary Redirect`, the equivalent of this status code, but that never changes the method used.
- {{HTTPStatus("303")}} `See Also`, a temporary redirect that changes the method used to {{HTTPMethod("GET")}}.
- {{HTTPStatus("301")}} `Moved Permanently`, the permanent redirect.
