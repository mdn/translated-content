---
title: 508 Loop Detected
slug: Web/HTTP/Status/508
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

The HTTP **`508 Loop Detected`** [server error response](/en-US/docs/Web/HTTP/Status#server_error_responses) status code indicates that the entire operation failed because it encountered an infinite loop while processing a request with `Depth: infinity`.

The status may be given in the context of the Web Distributed Authoring and Versioning ({{Glossary("WebDAV")}}).
It was introduced as a fallback for cases where WebDAV clients do not support {{HTTPStatus("208", "208 Already Reported")}} responses (when requests do not explicitly include a `DAV` header).

## 狀態

```http
508 Loop Detected
```

## 範例

### 在 WebDAV 搜尋中無限迴圈

```http
PROPFIND /Coll/ HTTP/1.1
Host: example.com
Depth: infinity
Content-Type: application/xml; charset="utf-8"
Content-Length: 125

<?xml version="1.0" encoding="utf-8" ?>
<D:propfind xmlns:D="DAV:">
<D:prop> <D:displayname/> </D:prop>
</D:propfind>
```

```http
HTTP/1.1 508 Loop Detected
Content-Type: application/json; charset=utf-8
Server: Microsoft-IIS/8.0
Date: Wed, 15 May 2013 02:38:57 GMT
Content-Length: 72

{
"Message": "Please check the resources for cyclic references and try again."
}
```

## 規範

{{Specifications}}


## 參見

- [HTTP 回應狀態碼](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("208", "208 Already Reported")}}
