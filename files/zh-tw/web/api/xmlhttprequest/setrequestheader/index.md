---
title: XMLHttpRequest：setRequestHeader() 方法
slug: Web/API/XMLHttpRequest/setRequestHeader
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef('XMLHttpRequest')}}

{{domxref("XMLHttpRequest")}} 的 **`setRequestHeader()`** 方法用來設定 HTTP 的請求標頭。當使用 `setRequestHeader()` 的時候，必須在 {{domxref("XMLHttpRequest.open", "open()")}} 之後呼叫，同時也必須在 {{domxref("XMLHttpRequest.send", "send()")}} 之前呼叫。如果這個方法被呼叫了許多次，且設定的標頭是一樣的，那所有設定的值會被合併成一個單一的請求標頭。

在第一次呼叫 `setRequestHeader()` 之後的每一次的呼叫，都會把給定的文字附加在已存在的標頭內容之後。

如果沒有使用此設定 {{HTTPHeader("Accept")}} 標頭，則在呼叫 {{domxref("XMLHttpRequest.send", "send()")}} 時，將隨請求傳送類型為「`*/*`」 的 `Accept` 標頭。

出於安全原因，有幾個由使用者代理（User Agent）管控的{{Glossary("Forbidden_header_name", "禁止修改的標頭")}}。任何嘗試從前端 JavaScript 程式碼中設置這些標頭的值之行為都會被忽略，且不會發出警告或錯誤。

此外，可以在請求中添加 [`Authorization`](/zh-TW/docs/Web/HTTP/Headers/Authorization) HTTP 標頭，但如果請求被跨域重定向，這個標頭將會被移除。

> [!NOTE]
> 對於你的自訂字段，跨域發送請求時可能會遇到「**not allowed by Access-Control-Allow-Headers in preflight response**」的例外狀況。在這種情況下，你需要在伺服器端的回應標頭中設定 {{HTTPHeader("Access-Control-Allow-Headers")}}。

## 語法

```js-nolint
setRequestHeader(header, value)
```

### 參數

- `header`
  - : 想要設定所屬值的標頭名稱。
- `value`
  - : 用來設定標頭本身的值。

### 傳回值

無（{{jsxref("undefined")}}）。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [XMLHttpRequest 中的 HTML](/zh-TW/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
