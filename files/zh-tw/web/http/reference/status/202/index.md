---
title: 202 Accepted
slug: Web/HTTP/Reference/Status/202
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`202 Accepted`** [成功回應](/zh-TW/docs/Web/HTTP/Reference/Status#成功回應)狀態碼表示伺服器已接受請求以進行處理，但處理尚未完成，也可能尚未開始。實際上，請求的處理並不保證會完成；任務可能會失敗，或伺服器在嘗試處理時會拒絕請求。

`202` 回應是不具承諾性的，這表示 HTTP 無法在之後傳送非同步回應來指示處理的結果。這個狀態碼通常用於請求由另一個處理流程或伺服器處理的情況，或者請求以批次處理的情境。

## 狀態

```http
202 Accepted
```

## 範例

### 啟動自動化任務

在以下範例中，我們想啟動一個自動化流程，寄送電子郵件通知狗主人有接送任務：

```http
POST /tasks HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "task": "emailDogOwners",
  "template": "pickup"
}
```

伺服器回應表示已接受該任務請求進行處理。回應本文中會提供一個 URL，讓用戶可以追蹤任務狀態的變化：

```http
HTTP/1.1 202 Accepted
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "message": "請求已被接受，開始處理任務。",
  "taskId": "123",
  "monitorUrl": "http://example.com/tasks/123/status"
}
```

## 規範

{{Specifications}}

## 參見

- {{HTTPHeader("Accept")}}
- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Reference/Methods)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
