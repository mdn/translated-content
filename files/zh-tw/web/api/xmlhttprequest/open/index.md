---
title: XMLHttpRequest：open() 方法
slug: Web/API/XMLHttpRequest/open
---

{{APIRef('XMLHttpRequest')}}

{{domxref("XMLHttpRequest")}} 的 **`open()`** 方法用來初始化新建立的請求，或重新初始化現有請求。

> [!NOTE]
> 為已啟動（已經呼叫 `open()`）的請求呼叫此方法，相當於呼叫 {{domxref("XMLHttpRequest.abort", "abort()")}}。

## 語法

```js-nolint
open(method, url)
open(method, url, async)
open(method, url, async, user)
open(method, url, async, user, password)
```

### 參數

- `method`
  - : 要使用的 [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Methods)，例如 `"GET"`、`"POST"`、`"PUT"`、`"DELETE"` 等。對於非 HTTP(S) 之 URL 將被忽略。
- `url`
  - : 字串或任何其他帶有 {{Glossary("stringifier")}} 的物件──包括 {{domxref("URL")}} 物件──提供要向其發送請求的資源的 URL。
- `async` {{optional_inline}}

  - : 選擇性布林參數，表示是否非同步執行操作，預設為 `true`。如果該值為 `false`，則 `send()` 方法在收到回應之前不會傳回。如果為 `true`，則使用事件監聽器提供交易完成的通知。如果 `multipart` 屬性為 `true`，則該值必須為 `true`，否則將引發例外。

    > [!NOTE]
    > 主執行緒上的同步請求很容易破壞使用者體驗，應該避免；事實上，許多瀏覽器已經完全棄用了主執行緒上的同步 XHR 支援。 {{domxref("Worker")}} 中允許同步請求。

- `user` {{optional_inline}}
  - : 選擇性參數，用於身份驗證的用戶名；預設值為 `null`。
- `password` {{optional_inline}}
  - : 選擇性參數，用於身份驗證的密碼；預設值為 `null`。

### 回傳值

無（{{jsxref("undefined")}}）。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- {{domxref("XMLHttpRequest")}} 相關方法：{{domxref("XMLHttpRequest.setRequestHeader","setRequestHeader()")}}、{{domxref("XMLHttpRequest.send", "send()")}}、{{domxref("XMLHttpRequest.abort", "abort()")}}
