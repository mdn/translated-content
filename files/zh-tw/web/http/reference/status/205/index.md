---
title: 205 Reset Content
slug: Web/HTTP/Reference/Status/205
l10n:
  sourceCommit: 74ab26a101ef2e4d5e5f25962033bc1042102677
---

HTTP **`205 Reset Content`** [成功回應](/zh-TW/docs/Web/HTTP/Reference/Status#成功回應)狀態碼表示請求已成功處理，且用戶端應重置文件視圖。

此回應旨在支援使用者接收支援資料輸入的內容、在請求中提交使用者編輯的資料，以及需要為下一次輸入重置內容的用例。「重置內容」的指令可能意味著清除表單內容、重置畫布狀態或刷新使用者介面；具體實作取決於用戶端。

> [!NOTE]
> 在使用 `205` 狀態的 Web 應用程式中，會假定用戶端在收到 `205` 回應後處理重置內容。這通常是透過 JavaScript 完成的，因為瀏覽器本身不會在收到 `205` 回應後原生處理重置表單等內容。

請注意，回應不得包含任何內容或 {{HTTPHeader("Content-Length")}} 標頭（瀏覽器可能會拒絕包含內容的回應）。也可以使用帶有空分塊的 {{HTTPHeader("Transfer-Encoding", "Transfer-Encoding: chunked")}} 標頭來表示空回應。

## 狀態

```http
205 Reset Content
```

## 範例

### 在收到 `205 Reset Content` 後重置表單

在此範例中，用戶端發送一個 `POST` 請求，以提交帶有註解 `你好！` 的表單：

```http
POST /submit HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 17

comment=你好！
```

成功處理表單提交後，伺服器會回傳以下 `205` 回應，表示用戶端應重置表單。

```http
HTTP/1.1 205 Reset Content
Content-Type: text/html; charset=utf-8
Content-Length: 0
Date: Wed, 26 Jun 2024 12:00:00 GMT
```

## 規範

{{Specifications}}

## 參見

- {{HTTPStatus(204)}} No Content
- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Reference/Methods)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
