---
title: XMLHttpRequest.setRequestHeader()
slug: Web/API/XMLHttpRequest/setRequestHeader
---

{{APIRef('XMLHttpRequest')}}

{{domxref("XMLHttpRequest")}} 物件中的 **`setRequestHeader()`** 方法用來設定 HTTP 的要求標頭。當使用 `setRequestHeader()` 的時候，必須在 {{domxref("XMLHttpRequest.open", "open()")}} 之後呼叫，同時也必須在 {{domxref("XMLHttpRequest.send", "send()")}} 之前呼叫。如果這個方法被呼叫了許多次，且設定的標頭是一樣的，那所有設定的值會被合併成一個單一的標頭請求。

在第一次呼叫 `setRequestHeader()` 之後的每一次的呼叫，都會把給定的文字附加在已存在的標頭內容之後。

如果沒有使用此設定 {{HTTPHeader("Accept")}} 標頭，則在呼叫 {{domxref("XMLHttpRequest.send", "send()")}} 時，將隨請求傳送類型為「`*/*`」 的 `Accept` 標頭。

基於安全的理由，有些標頭只有使用者代理器可以使用。這些標頭包含了： {{Glossary("Forbidden_header_name", "forbidden header names", 1)}} 和 {{Glossary("Forbidden_response_header_name", "forbidden response header names", 1)}}.

> **備註：** 對於你的自訂字段，跨域發送請求時可能會遇到「not allowed by Access-Control-Allow-Headers in preflight response」的例外狀況。在這種情況下，你需要在伺服器端的回應標頭中設定 {{HTTPHeader("Access-Control-Allow-Headers")}}。

## 語法

```plain
XMLHttpRequest.setRequestHeader(header, value)
```

### 參數

- `header`
  - : 想要設定所屬值的標頭名稱。
- `value`
  - : 用來設定標頭本身的值。

### 回傳值

None ({{jsxref("undefined")}})。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTML in XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
