---
title: XMLHttpRequest：open() 方法
slug: Web/API/XMLHttpRequest/open
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

{{domxref("XMLHttpRequest")}} 的 **`open()`** 方法會初始化一個新建立的請求，或重新初始化一個已存在的請求。

> [!NOTE]
> 對於一個已啟動的請求（即 `open()` 已被呼叫過的請求）呼叫此方法，等同於呼叫 {{domxref("XMLHttpRequest.abort", "abort()")}}。

## 語法

```js-nolint
open(method, url)
open(method, url, async)
open(method, url, async, user)
open(method, url, async, user, password)
```

### 參數

- `method`
  - : 要使用的 [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Reference/Methods)，例如 `"GET"`、`"POST"`、`"PUT"`、`"DELETE"` 等。對於非 HTTP(S) 的 URL 會被忽略。
- `url`
  - : 一個字串或任何具有{{Glossary("stringifier", "字串化器")}}的其他物件（包括一個 {{domxref("URL")}} 物件），提供了要傳送請求的資源的 URL。
- `async` {{optional_inline}}
  - : 一個可選的布林參數，預設為 `true`，表示是否要非同步執行操作。如果此值為 `false`，`send()` 方法在收到回應前不會回傳。如果為 `true`，則會使用事件監聽器來提供完成交易的通知。如果 `multipart` 屬性為 `true`，此值*必須*為 `true`，否則將會拋出例外。

    > [!NOTE]
    > 在主執行緒上的同步請求很容易對使用者體驗造成干擾，應避免使用；事實上，許多瀏覽器已完全棄用在主執行緒上的同步 XHR 支援。在 {{domxref("Worker")}} 中允許同步請求。

- `user` {{optional_inline}}
  - : 可選的使用者名稱，用於驗證；預設為 `null` 值。
- `password` {{optional_inline}}
  - : 可選的密碼，用於驗證；預設為 `null` 值。

### 回傳值

無（{{jsxref("undefined")}}）。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- 相關的 {{domxref("XMLHttpRequest")}} 方法：{{domxref("XMLHttpRequest.setRequestHeader","setRequestHeader()")}}、{{domxref("XMLHttpRequest.send", "send()")}} 及 {{domxref("XMLHttpRequest.abort", "abort()")}}
