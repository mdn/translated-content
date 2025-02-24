---
title: 501 Not Implemented
slug: Web/HTTP/Status/501
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`501 Not Implemented`** [伺服器錯誤回應](/en-US/docs/Web/HTTP/Status#server_error_responses)狀態碼表示伺服器不支援完成請求所需的功能。

此回應狀態也可能包含 {{HTTPHeader("Retry-After")}} 標頭，告知用戶端在指定時間後可以重試請求。501 回應預設是可快取的，除非快取標頭另有指示。

A response with this status may also include a {{HTTPHeader("Retry-After")}} header, telling the client that they can retry the request after the specified time has elapsed.
A `501` response is cacheable by default unless caching headers instruct otherwise.

`501` is the appropriate response when the server does not recognize the request method and is incapable of supporting it for any resource.
Servers are required to support {{HTTPMethod("GET")}} and {{HTTPMethod("HEAD")}}, and therefore must not return `501` in response to requests with these methods.
If the server does recognize the method, but intentionally does not allow it, the appropriate response is {{HTTPStatus("405", "405 Method Not Allowed")}}.

If you have visited a web page and you are seeing `501` errors, these issues require investigation and fixing by server owners or administrators.
You can clear your browser cache for the domain, disable proxies if you are using one, or try again later to see if it works as expected.

A `501` response can occur if proxies cannot not handle request methods used in the context of HTTP Extension Framework ({{RFC("2774")}}) applications.
This status can also occur in Web Distributed Authoring and Versioning ({{Glossary("WebDAV")}}) when a request method (`SEARCH`, `PROPFIND`) does not have a URL handler configured to process it.

## 狀態

```http
501 Not Implemented
```

## Examples

### Extension method not supported

In the following HTTP Extension Framework example, a client sends a request with a mandatory extension specified in the `C-MAN` header.
The {{HTTPHeader("Connection")}} header specifies that these extensions are to be handled on a [hop-by-hop](/en-US/docs/Web/HTTP/Headers#hop-by-hop_headers) basis.
A proxy refuses to forward the `M-GET` method, and sends a `501` error in response:

```http
M-GET /document HTTP/1.1
Host: example.com
C-Man: "http://www.example.org/"
Connection: C-Man
```

```http
HTTP/1.1 501 Not Implemented
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("510", "510 Not Extended")}}
- [HTTP 501 錯誤](https://learn.microsoft.com/zh-tw/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)在微軟 ASP.NET 文件
