---
title: 208 Already Reported
slug: Web/HTTP/Reference/Status/208
l10n:
  sourceCommit: 975650c2f6ea843d6f7cbc721aee5dbc1db907b2
---

HTTP **`208 Already Reported`** [成功回應](/zh-TW/docs/Web/HTTP/Reference/Status#成功回應)狀態碼用於 {{HTTPStatus("207", "207 Multi-Status")}} 回應中，以節省空間並避免衝突。此回應專門用於基於 Web 的分散式編寫和版本控制（{{Glossary("WebDAV")}}）的上下文中。

如果多次使用不同的路徑請求相同的資源（例如，作為集合的一部分），則只有第一次請求會以 {{HTTPStatus("200")}} 回報。所有其他綁定的回應將以此 `208` 狀態碼回報，因此不會產生衝突，且回應會保持較短。

> [!NOTE]
> 將資源*綁定*到多個路徑的能力是 {{Glossary("WebDAV")}} 協定的擴充功能（存取 WebDAV 伺服器的 Web 應用程式可能會收到此回應）。存取網頁的瀏覽器永遠不會遇到此狀態碼。

## 狀態

```http
208 Already Reported
```

## 範例

### 在 `207 Multi-Status` 回應中接收 `208`

以下是來自 WebDAV 伺服器的 `207 Multi-Status` 回應範例，其中包含一個 `208` 回應。請注意最後一個 `<D:status>` 元素中的 `208`，這表示名為 `Loop Demo` 的資源已在該 `207` 回應的較早部分回報過。

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

## 參見

- {{HTTPStatus("200")}}
- {{HTTPStatus("508", "508 Loop Detected")}}
- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Reference/Methods)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
