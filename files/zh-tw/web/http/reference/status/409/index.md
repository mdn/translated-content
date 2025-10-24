---
title: 409 Conflict
slug: Web/HTTP/Reference/Status/409
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`409 Conflict`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示請求與目標資源的當前狀態存在衝突。

在 {{glossary("WebDAV")}} 遠端 Web 編寫中，409 衝突回應是發送給用戶端的錯誤，以便用戶可能能夠解決衝突並重新提交請求。例如，如果請求創建集合 `/a/b/c/d/`，但 `/a/b/c/` 不存在，則請求必須以 409 失敗。此外，在上傳比伺服器上現有檔案更舊的檔案時，可能導致版本控制衝突，會收到 409 回應。

在其他系統中，409 回應可用於特定於實作的目的，例如表示伺服器已收到多個更新同一資源的請求。

## 狀態

```http
409 Conflict
```

## 範例

### 不允許並發任務

在以下範例中，我們想要啟動一個自動化流程，執行系統中的常見任務：

```http
POST /tasks HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "task": "emailDogOwners",
  "template": "pickup"
}
```

在這個實作中，伺服器不允許兩個並發作業運行，並返回 409，讓用戶端有機會檢查他們是否打算執行該操作或運行不同的任務：

```http
HTTP/1.1 409 Conflict
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
"code": "AutomationConflict",
"task": "emailDogOwners",
"message": "任務已鎖定。因為作業已在運行，無法啟動新的自動化。",
"runningTaskId": "123"
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPMethod("PUT")}}
