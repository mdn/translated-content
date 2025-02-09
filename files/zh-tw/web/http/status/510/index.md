---
title: 510 Not Extended
slug: Web/HTTP/Status/510
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

The HTTP **`510 Not Extended`** [server error response](/en-US/docs/Web/HTTP/Status#server_error_responses) status code is sent when the client request declares an HTTP Extension ({{RFC("2774")}}) that should be used to process the request, but the extension is not supported.

## 狀態

```http
510 Not Extended
```

## Examples

### Extension not supported

In the following example, a client sends a request with a mandatory extension specified in the `C-MAN` header.
The {{HTTPHeader("Connection")}} header specifies that these extensions are to be handled on a [hop-by-hop](/en-US/docs/Web/HTTP/Headers#hop-by-hop_headers) basis.
A {{Glossary("Proxy_server", "proxy")}} forwards the extended request, but the {{HTTPHeader("Connection")}} header is stripped out in transit.
Because the origin server doesn't receive any information about the `M-GET` method, it sends a `510` in response:

```http
M-GET /document HTTP/1.1
Host: example.com
C-Man: "http://www.example.org/"
Connection: C-Man
```

```http
HTTP/1.1 510 Not Extended
```

## 規格

{{Specifications}}


## 參見

- [HTTP 回應狀態碼](/en-US/docs/Web/HTTP/Status)
