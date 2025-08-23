---
title: 204 No Content
slug: Web/HTTP/Reference/Status/204
l10n:
  sourceCommit: 74ab26a101ef2e4d5e5f25962033bc1042102677
---

HTTP **`204 No Content`** [成功回應](/zh-TW/docs/Web/HTTP/Reference/Status#成功回應)狀態碼表示請求已成功，但用戶端不需要離開當前頁面。`204` 回應預設是可快取的，在這種情況下會包含 {{HTTPHeader("ETag")}} 標頭。

對這些請求方法的回應 `204 No Content` 具有以下意義和結果：

- {{HTTPMethod("DELETE")}}：操作已成功，且無需提供進一步的訊息。
- {{HTTPMethod("PUT")}}：操作已成功，且 {{HTTPHeader("ETag")}} 的值包含目標資源新表示的實體標籤。

在為維基站等應用程式實作「儲存並繼續編輯」功能時，可以使用 `204` 回應。在這種情況下，可以使用 {{HTTPMethod("PUT")}} 請求來儲存頁面內容，而 `204 No Content` 回應則向瀏覽器指示編輯器不應被其他內容取代。

請注意，回應不得包含任何內容或 {{HTTPHeader("Content-Length")}} 標頭（瀏覽器可能會拒絕包含內容的回應）。

## 狀態

```http
204 No Content
```

## 範例

### 刪除圖片後收到回應

在此範例中，用戶端使用 `DELETE` 方法發送刪除圖片的請求。該請求包含一個帶有權杖的 {{HTTPHeader("Authorization")}} 標頭以驗證請求：

```http
DELETE /image/123 HTTP/1.1
Host: example.com
Authorization: Bearer 1234abcd
```

成功刪除圖片後，伺服器會以無主體的 `204` 回應，表示無需再向用戶端發送任何訊息。

```http
HTTP/1.1 204 No Content
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
```

## 規範

{{Specifications}}

## 參見

- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Reference/Methods)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
