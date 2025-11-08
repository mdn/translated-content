---
title: 508 Loop Detected
slug: Web/HTTP/Reference/Status/508
l10n:
  sourceCommit: e626fb706bfef0d496f0a209554f80a2d9313c0c
---

HTTP **`508 Loop Detected`** [服务端错误响应](/zh-CN/docs/Web/HTTP/Reference/Status#服务端错误响应)状态码表示整个操作失败，因为它在处理带有 `Depth: infinity` 的请求时遇到了无限循环。

该状态码可能出现在基于 Web 的分布式编写与版本控制（{{Glossary("WebDAV")}}）的上下文中。它被引入作为 WebDAV 客户端不支持 {{HTTPStatus("208", "208 Already Reported")}} 响应（当请求未显式包含 `DAV` 标头时）的备用方案。

## 状态

```http
508 Loop Detected
```

## 示例

### WebDAV 搜索中的无限循环

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
  "Message": "请检查资源是否存在循环引用，然后重试。"
}
```

## 规范

{{Specifications}}

## 参见

- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("208", "208 Already Reported")}}
