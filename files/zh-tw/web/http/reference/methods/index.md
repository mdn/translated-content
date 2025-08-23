---
title: HTTP 請求方法
short-title: 請求方法
slug: Web/HTTP/Reference/Methods
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP 定義了一組**請求方法**，用於指示請求的目的，以及當請求成功時預期的結果。儘管它們也可以是名詞，這些請求方法有時被稱為 _HTTP 動詞_。每個請求方法都有其獨特的語義，但多個方法共享一些共同特徵：具體來說，請求方法可以是{{glossary("Safe/HTTP", "安全")}}、{{glossary("idempotent", "冪等")}}或{{glossary("cacheable", "可快取")}}的。

- {{HTTPMethod("GET")}}
  - : `GET` 方法請求指定資源的表示。使用 `GET` 的請求只應檢索數據。且不應包含請求{{Glossary("HTTP Content", "內容")}}。
- {{HTTPMethod("HEAD")}}
  - : `HEAD` 方法要求與 `GET` 請求完全相同的回應，但不包括回應主體。
- {{HTTPMethod("POST")}}
  - : `POST` 方法將實體提交給指定的資源，通常導致狀態的變化或伺服器上的副作用。
- {{HTTPMethod("PUT")}}
  - : `PUT` 方法用請求{{Glossary("HTTP Content", "內容")}}替換目標資源的所有當前表示。
- {{HTTPMethod("DELETE")}}
  - : `DELETE` 方法刪除指定的資源。
- {{HTTPMethod("CONNECT")}}
  - : `CONNECT` 方法與目標資源識別的伺服器建立隧道。
- {{HTTPMethod("OPTIONS")}}
  - : `OPTIONS` 方法描述目標資源的通信選項。
- {{HTTPMethod("TRACE")}}
  - : `TRACE` 方法在到目標資源的路徑上執行消息回送測試。
- {{HTTPMethod("PATCH")}}
  - : `PATCH` 方法對資源應用部分修改。

## 安全、冪等與可快取的請求方法

以下表格列出 HTTP 請求方法，並依安全、可快取與冪等進行分類。

| 方法                      | 安全 | 冪等 | 可快取   |
| ------------------------- | ---- | ---- | -------- |
| {{HTTPMethod("GET")}}     | 是   | 是   | 是       |
| {{HTTPMethod("HEAD")}}    | 是   | 是   | 是       |
| {{HTTPMethod("OPTIONS")}} | 是   | 是   | 否       |
| {{HTTPMethod("TRACE")}}   | 是   | 是   | 否       |
| {{HTTPMethod("PUT")}}     | 否   | 是   | 否       |
| {{HTTPMethod("DELETE")}}  | 否   | 是   | 否       |
| {{HTTPMethod("POST")}}    | 否   | 否   | 條件的\* |
| {{HTTPMethod("PATCH")}}   | 否   | 否   | 條件的\* |
| {{HTTPMethod("CONNECT")}} | 否   | 否   | 否       |

\* 當回應明確包含[新鮮度](/zh-TW/docs/Web/HTTP/Guides/Caching)資訊且帶有相符的 {{HTTPHeader("Content-Location")}} 標頭時，`POST` 和 `PATCH` 請求是可快取的。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- [HTTP 標頭](/zh-TW/docs/Web/HTTP/Reference/Headers)
