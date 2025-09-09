---
title: 508 Loop Detected
slug: Web/HTTP/Reference/Status/508
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`508 Loop Detected`** [伺服器錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#伺服器錯誤回應)狀態碼表示整個操作失敗，因為在處理帶有 `Depth: infinity` 的請求時遇到了無限迴圈。

此狀態碼可能會出現在基於 Web 的分散式編寫和版本控制（{{Glossary("WebDAV")}}）的情境中。它作為後備方案被引入，用於處理當請求中未明確包含 `DAV` 標頭而使 WebDAV 用戶端不支援 {{HTTPStatus("208", "208 Already Reported")}} 回應的情況。

## 狀態

```http
508 Loop Detected
```

## 範例

### 在 WebDAV 搜尋中遇到無限迴圈

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
"Message": "請檢查資源是否有循環引用，然後再試一次。"
}
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("208", "208 Already Reported")}}
