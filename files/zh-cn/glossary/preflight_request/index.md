---
title: 预检请求
slug: Glossary/Preflight_request
l10n:
  sourceCommit: 38fb31b12de1019a538e868a90dd4dd4858e4871
---

{{GlossarySidebar}}

一个 CORS 预检请求是用于检查服务器是否支持 {{Glossary("CORS")}} 即跨域资源共享。

它一般是用了以下几个 HTTP 请求首部的 {{HTTPMethod("OPTIONS")}} 请求：{{HTTPHeader("Access-Control-Request-Method")}} 和 {{HTTPHeader("Access-Control-Request-Headers")}}，以及一个 {{HTTPHeader("Origin")}} 首部。

当有必要的时候，浏览器会自动发出一个预检请求；所以在正常情况下，前端开发者不需要自己去发这样的请求。预检请求会在请求被标记为[“需要预检的请求”](/zh-CN/docs/Web/HTTP/CORS#preflighted_requests)时进行，而对于[简单请求](/zh-CN/docs/Web/HTTP/CORS#simple_requests)则不会进行。

例如，一个客户端可能会在实际发送一个 `DELETE` 请求之前，先向服务器发起一个预检请求，用于询问是否可以向服务器发起一个 {{HTTPMethod("DELETE")}} 请求：

```http
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: origin, x-requested-with
Origin: https://foo.bar.org
```

如果服务器允许，那么服务器就会响应这个预检请求。并且其响应标头 {{HTTPHeader("Access-Control-Allow-Methods")}} 会将 `DELETE` 包含在其中：

```http
HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Max-Age: 86400
```

预检响应可以通过类似上面的例子中的 {{HTTPHeader("Access-Control-Max-Age")}} 标头来缓存，以便在同一个 {{Glossary("URL")}} 下创建的请求中使用。为了缓存预检响应，浏览器使用一个特定的缓存，这个缓存是与浏览器管理的一般 HTTP 缓存分开的。预检响应永远不会被缓存在浏览器的一般 HTTP 缓存中。

## 参见

- {{Glossary("CORS")}}
- {{HTTPMethod("OPTIONS")}}
