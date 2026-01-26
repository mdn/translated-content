---
title: 100 Continue
slug: Web/HTTP/Reference/Status/100
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`100 Continue`** [資訊回應](/zh-TW/docs/Web/HTTP/Reference/Status#資訊回應)狀態碼表示伺服器已收到請求的初始部分，且尚未拒絕。用戶應繼續發送請求，或者如果請求已經完成，則可以忽略 100 回應。

當請求包含 {{HTTPHeader("Expect", "Expect: 100-continue")}} 標頭時，100 Continue 回應表示伺服器已準備好或能夠接收請求內容。如果用戶預期可能會發生錯誤，例如在未經驗證的情況下發送會改變狀態的操作，等待 100 Continue 回應會很有幫助。

## 狀態

```http
100 Continue
```

## 範例

### 使用 100 Continue 的 PUT 請求

以下 {{HTTPMethod("PUT")}} 請求會向伺服器傳送有關檔案上傳的訊息。用戶會在收到 100 回應後才繼續傳送內容，以避免在網路上傳送可能因 {{HTTPStatus("405")}}、{{HTTPStatus("401")}} 或 {{HTTPStatus("403")}} 等錯誤而失敗的資料。首先，用戶僅傳送標頭，其中包含 {{HTTPHeader("Expect", "Expect: 100-continue")}} 標頭：

```http
PUT /videos HTTP/1.1
Host: uploads.example.com
Content-Type: video/h264
Content-Length: 123456789
Expect: 100-continue
```

伺服器回應請求可以繼續：

```http
HTTP/1.1 100 Continue
```

用戶接著傳送實際資料以完成請求：

```http
[作為 PUT 請求內容的視訊資料]
```

## 規範

{{Specifications}}

## 參見

- {{HTTPHeader("Expect")}}
- {{HTTPStatus(417)}}
