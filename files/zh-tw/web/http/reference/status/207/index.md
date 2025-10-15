---
title: 207 Multi-Status
slug: Web/HTTP/Reference/Status/207
l10n:
  sourceCommit: 975650c2f6ea843d6f7cbc721aee5dbc1db907b2
---

HTTP **`207 Multi-Status`** [成功回應](/zh-TW/docs/Web/HTTP/Reference/Status#成功回應)狀態碼表示有多種回應。此回應專門用於基於 Web 的分散式編寫和版本控制（{{Glossary("WebDAV")}}）的上下文中。

回應主體是一個 `text/xml` 或 `application/xml` 的 HTTP 實體，具有一個 `multistatus` 根元素，其中列出了各個獨立的回應碼。

> [!NOTE]
> 存取網頁的瀏覽器永遠不會遇到此狀態碼。回傳*資源集合*的能力是 {{Glossary("WebDAV")}} 協定的一部分，只有存取 WebDAV 伺服器的 Web 應用程式才會遇到。

## 狀態

```http
207 Multi-Status
```

## 範例

### 在 WebDAV 上下文中接收 `207` 回應

以下回應是 {{Glossary("WebDAV")}} 伺服器傳送給用戶端的 `207` 回應範例。其中有一個 `multistatus` 根元素，包含了各個集合的詳細資訊：

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

## 參見

- {{HTTPStatus("204")}}
- {{HTTPStatus("403")}}
- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Reference/Methods)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
