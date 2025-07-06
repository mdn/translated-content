---
title: 411 Length Required
slug: Web/HTTP/Reference/Status/411
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`411 Length Required`** [用戶錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶錯誤回應)狀態碼表示伺服器拒絕接受沒有定義 {{HTTPHeader("Content-Length")}} 標頭的請求。

> [!NOTE]
> 在以一系列分塊發送數據時，會省略 `Content-Length` 標頭，而在每個分塊的開頭，當前分塊的長度需要以十六進制格式包含。詳情請參見 {{HTTPHeader("Transfer-Encoding")}}。

## 狀態

```http
411 Length Required
```

## 範例

### 分塊的 POST 請求

以下請求使用分塊傳輸，這在某些情況下是預設的數據傳輸方式（例如[寫入串流](https://nodejs.org/api/http.html#requestwritechunk-encoding-callback)）：

```http
POST /translate/de HTTP/1.1
Host: api.example.com
Content-Type: application/json
Transfer-encoding: chunked

2C
{"text": "Hurry up, Ayşe is hungry!"}
0
```

在這種情況下，伺服器期望請求包含 {{HTTPHeader("Content-Length")}} 標頭，否則將返回 411 回應：

```http
HTTP/1.1 411 Length Required
Content-Type: application/json
Content-Length: 110

{
  "message": "請求必須包含 Content Length 標頭。",
  "documentation": "http://api/example.com/docs/errors",
}
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
