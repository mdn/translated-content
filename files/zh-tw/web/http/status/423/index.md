---
title: 423 Locked
slug: Web/HTTP/Status/423
l10n:
  sourceCommit: 50a5ce565b2fa0b988b3f5ff90ea4b24b13e4b9d
---

{{HTTPSidebar}}

> **備註：** *鎖定*資源的能力僅特定於某些 {{Glossary("WebDAV")}} 伺服器。訪問網頁的瀏覽器永遠不會遇到此狀態碼；在出現錯誤情況時，它們將將其處理為通用的 `400` 狀態碼。

HTTP **`423 Locked`** 錯誤回應碼表示所暫時鎖定的資源，意味著無法訪問。其內容應該包含 WebDAV 的 XML 格式的一些資訊。

## 狀態

```http
423 Locked
```

### 範例

```http
HTTP/1.1 423 Locked
Content-Type: application/xml; charset="utf-8"
Content-Length: xxxx

<?xml version="1.0" encoding="utf-8" ?>
<D:error xmlns:D="DAV:">
  <D:lock-token-submitted>
    <D:href>/workspace/webdav/</D:href>
  </D:lock-token-submitted>
</D:error>
```

## 規範

{{Specifications}}
