---
title: 207 Multi-Status
slug: Web/HTTP/Status/207
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{HTTPSidebar}}

> [!NOTE]
> 返回*资源集合*的能力属于 {{Glossary("WebDAV")}} 协议（可能由访问 WebDAV 服务器的 Web 应用程序接收）。浏览器访问网页时永远不会遇到此状态码。

HTTP **`207 Multi-Status`** 响应状态码表示可能存在多个响应。

响应主体是一个带有 `multistatus` 根元素的 `text/xml` 或 `application/xml` HTTP 实体。XML 主体将列出所有单独的响应状态码。

## 状态

```plain
207 Multi-Status
```

## 示例

```http
HTTP/1.1 207 Multi-Status
Content-Type: application/xml; charset="utf-8"
Content-Length: 1241

<?xml version="1.0" encoding="utf-8" ?>
<D:multistatus xmlns:D="DAV:">
  <D:response>
    <D:href>http://www.example.com/Coll/</D:href>
    <D:propstat>
      <D:prop>
        <D:displayname>Loop Demo</D:displayname>
        <D:resource-id>
          <D:href>urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf8</D:href>
        </D:resource-id>
      </D:prop>
      <D:status>HTTP/1.1 200 OK</D:status>
    </D:propstat>
  </D:response>
  <D:response>
    <D:href>http://www.example.com/Coll/Bar</D:href>
    <D:propstat>
      <D:prop>
        <D:displayname>Loop Demo</D:displayname>
        <D:resource-id>
          <D:href>urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf8</D:href>
        </D:resource-id>
      </D:prop>
      <D:status>HTTP/1.1 208 Already Reported</D:status>
    </D:propstat>
  </D:response>
</D:multistatus>
```

## 规范

{{Specifications}}

## 参见

- [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Methods)
- {{HTTPStatus("204")}}
- {{HTTPStatus("403")}}
