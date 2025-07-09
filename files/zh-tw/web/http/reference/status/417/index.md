---
title: 417 Expectation Failed
slug: Web/HTTP/Reference/Status/417
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`417 Expectation Failed`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示無法滿足請求的 {{HTTPHeader("Expect")}} 標頭中給定的期望。在收到 417 回應後，用戶端應該移除 `Expect` 標頭並重新發送請求，直接在請求主體中包含檔案，而不必等待 {{HTTPStatus("100")}} 回應。詳細資訊請參見 {{HTTPHeader("Expect")}} 標頭的文件。

## 狀態

```http
417 Expectation Failed
```

## 範例

### 期望不支援

以下的 PUT 請求會傳送有關預計上傳檔案的資訊至伺服器。用戶端使用 `Expect: 100-continue` 標頭，並且不包含請求主體，以避免在網路上傳輸可能導致錯誤（例如 {{HTTPStatus("405")}}、{{HTTPStatus("401")}} 或 {{HTTPStatus("403")}}）的資料：

```http
PUT /videos HTTP/1.1
Host: uploads.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

在此範例伺服器實作中，不支援期望，且如果請求中包含任何值的 `Expect` 標頭，將導致伺服器回應 417：

```http
HTTP/1.1 417 Expectation Failed
Date: Fri, 28 Jun 2024 11:40:58 GMT
```

收到此回應後，用戶端應該移除 `Expect` 標頭，並直接將{{Glossary("HTTP Content", "內容")}}包含在請求主體中重新發送請求：

```http
PUT /videos HTTP/1.1
Host: uploads.example.com
Content-Type: video/h264
Content-Length: 1234567890987

[…]
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("100", "100 Continue")}}
- {{HTTPHeader("Expect")}}
