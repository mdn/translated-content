---
title: 208 Already Reported
slug: Web/HTTP/Status/208
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{HTTPSidebar}}

> **備註：** *將資源綁定到多個路徑*的能力是 {{Glossary("WebDAV")}} 協定的擴展（可能被訪問 WebDAV 伺服器的 Web 應用程式收到）。訪問網頁的瀏覽器永遠不會遇到此狀態碼。

HTTP **`208 Already Reported`** 成功回應碼用於 {{HTTPStatus("207")}}（`207 Multi-Status`）回應中，以節省空間並避免衝突。如果多次使用不同的路徑請求相同的資源（例如作為集合的一部分），則只有第一次請求會以 {{HTTPStatus("200")}} 回應。所有其他綁定的回應將以此 `208` 狀態碼回應，因此不會產生衝突，回應保持較短。

## 狀態

```plain
208 Already Reported
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

## 規範

{{Specifications}}

## 參見

- {{HTTPStatus("200")}}
