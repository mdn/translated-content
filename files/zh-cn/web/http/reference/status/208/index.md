---
title: 208 Already Reported
slug: Web/HTTP/Reference/Status/208
l10n:
  sourceCommit: 975650c2f6ea843d6f7cbc721aee5dbc1db907b2
---

HTTP **`208 Already Reported`** 响应状态码在 {{HTTPStatus("207", "207 Multi-Status")}} 响应中使用，以节省空间并避免冲突。此响应仅在基于 Web 的分布式编写与版本控制（{{Glossary("WebDAV")}}）中使用。

如果多次使用不同的路径请求相同资源（例如集合的一部分），只有第一次请求会响应 `200` 状态码，而其他请求则会响应 `208` 状态码，所以不会产生冲突，响应时间也会更短。

> [!NOTE]
> 将资源*绑定*到多个路径的能力属于 {{Glossary("WebDAV")}} 协议的扩展（可能由访问 WebDAV 服务器的 Web 应用程序接收）。浏览器访问网页时永远不会遇到此状态码。

## 状态

```http
208 Already Reported
```

## 示例

### 在 `207 Multi-Status` 响应中接收 `208` 响应

以下是来自 WebDAV 服务器的 `207 Multi-Status` 响应示例，其中包含一个 `208` 响应。请注意最后一个 `<D:status>` 元素中的 `208`，它表示在之前的 `207` 响应中已报告了名为 `Loop Demo` 的资源。

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
    <D:href>http://www.example.com/Coll/Foo</D:href>
    <D:propstat>
      <D:prop>
        <D:displayname>Bird Inventory</D:displayname>
        <D:resource-id>
          <D:href>urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf9</D:href>
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

- {{HTTPStatus("200")}}
- {{HTTPStatus("508", "508 Loop Detected")}}
- [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Reference/Methods)
- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Reference/Status)
