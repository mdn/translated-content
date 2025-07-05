---
title: 423 Locked
slug: Web/HTTP/Reference/Status/423
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`423 Locked`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示某個資源已被**鎖定**，意味著無法存取。其回應主體應包含以 {{glossary("WebDAV")}} 的 XML 格式的相關資訊。

> [!NOTE]
> *鎖定*資源以防止衝突的功能是某些 {{Glossary("WebDAV")}} 伺服器特有的。瀏覽器在存取網頁時永遠不會遇到此狀態碼；如果發生錯誤情況，它們將其視為一般的 {{HTTPStatus(400)}} 狀態碼來處理。

## 狀態

```http
423 Locked
```

## 範例

### WebDAV 423 Locked 回應

```http
HTTP/1.1 423 Locked
Content-Type: application/xml; charset="utf-8"
Content-Length: xxxx

<?xml version="1.0" encoding="utf-8" ?>
<D:error xmlns:D="DAV:">
  <D:lock-token-submitted>
    <D:href>/workspace/web-dav/</D:href>
  </D:lock-token-submitted>
</D:error>
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
