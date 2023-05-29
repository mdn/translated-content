---
title: HTTP 請求方法
slug: Web/HTTP/Methods
---

{{HTTPSidebar}}

HTTP 定義了一組能令給定資源，執行特定操作的**請求方法**（request methods）。他們儘管屬於名詞，但也能稱為 _HTTP 動詞_。每個方法都有不同的語意，不過也有些共享的相通功能，像是{{glossary("safe")}}、{{glossary("idempotent")}}、{{glossary("cacheable")}}。

- [`GET`](/zh-TW/docs/Web/HTTP/Methods/GET)
  - : `GET` 方法請求展示指定資源。使用 `GET` 的請求只應用於取得資料。
- [`HEAD`](/zh-TW/docs/Web/HTTP/Methods/HEAD)
  - : `HEAD` 方法請求與 `GET` 方法相同的回應，但它沒有回應主體（response body）。
- [`POST`](/zh-TW/docs/Web/HTTP/Methods/POST)
  - : `POST` 方法用於提交指定資源的實體，通常會改變伺服器的狀態或副作用（side effect）。
- [`PUT`](/zh-TW/docs/Web/HTTP/Methods/PUT)
  - : `PUT` 方法會取代指定資源所酬載請求（request payload）的所有表現。
- [`DELETE`](/zh-TW/docs/Web/HTTP/Methods/DELETE)
  - : `DELETE` 方法會刪除指定資源.
- [`CONNECT`](/zh-TW/docs/Web/HTTP/Methods/CONNECT)
  - : `CONNECT` 方法會和指定資源標明的伺服器之間，建立隧道（tunnel）。
- [`OPTIONS`](/zh-TW/docs/Web/HTTP/Methods/OPTIONS)
  - : `OPTIONS` 方法描述指定資源的溝通方法（communication option）。
- [`TRACE`](/zh-TW/docs/Web/HTTP/Methods/TRACE)
  - : `TRACE` 方法會與指定資源標明的伺服器之間，執行迴路返回測試（loop-back test）。
- [`PATCH`](/zh-TW/docs/Web/HTTP/Methods/PATCH)
  - : `PATCH` 方法套用指定資源的部份修改。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP 標頭](/zh-TW/docs/Web/HTTP/Headers)
