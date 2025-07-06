---
title: 406 Not Acceptable
slug: Web/HTTP/Reference/Status/406
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`406 Not Acceptable`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示伺服器無法產生與請求的[主動內容協商](/zh-TW/docs/Web/HTTP/Guides/Content_negotiation#服務器驅動的內容協商)標頭中定義的可接受值清單匹配的回應，並且伺服器不願意提供默認表示。

主動內容協商標頭包括：

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}

伺服器可能會傳回與請求的 `Accept` 標頭不同的回應。在這種情況下，傳回一個 {{HTTPStatus("200")}} 狀態碼，並提供與用戶端可接受內容協商值清單不匹配的默認資源，可能比傳回 406 回應更合適。

如果伺服器傳回 406，則應在回應主體中包含該資源的可用表示清單，以便使用者選擇，儘管目前沒有定義標準的方法來執行此操作。

## 狀態

```http
406 Not Acceptable
```

## 範例

### 不支援的內容類型

以下請求假設 `www.example.com/docs/doc1` 支援以 `application/rtf` 格式回傳文件：

```http
GET /docs/doc1 HTTP/1.1
Host: example.com
Accept: application/rtf;
```

在這個例子中，伺服器實作並未退回到預設的內容類型，例如 `text/html` 或 `application/json`，而是返回了一個 406 回應：

```http
HTTP/1.1 406 Not Acceptable
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "code": "UnsupportedType",
  "message": "只支援「text/html」或「application/json」內容類型。",
}
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}
- HTTP [內容協商](/zh-TW/docs/Web/HTTP/Guides/Content_negotiation)
