---
title: 207 Multi-Status
slug: Web/HTTP/Status/207
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{HTTPSidebar}}

> [!NOTE]
> 返回一個*資源集合*的能力是 {{Glossary("WebDAV")}} 協定的一部分（它可能被訪問 WebDAV 伺服器的 Web 應用程式收到）。訪問網頁的瀏覽器永遠不會遇到此狀態碼。

HTTP **`207 Multi-Status`** 成功回應碼表示可能存在多種回應。

回應主體是一個 `text/xml` 或 `application/xml` 的 HTTP 實體，具有 `multistatus` 根元素。 XML 主體將列出所有個別的回應碼。

## 狀態

```http
207 Multi-Status
```

## 範例

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

## 規範

{{Specifications}}

## 參見

- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Methods)
- {{HTTPStatus("204")}}
- {{HTTPStatus("403")}}
