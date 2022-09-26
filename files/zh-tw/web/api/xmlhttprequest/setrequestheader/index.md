---
title: XMLHttpRequest.setRequestHeader()
slug: Web/API/XMLHttpRequest/setRequestHeader
---

{{APIRef('XMLHttpRequest')}}

{{domxref("XMLHttpRequest")}} 物件中的 **`setRequestHeader()`** 方法用來設定 HTTP 的表頭請求。當使用 `setRequestHeader()` 的時候，必須在 {{domxref("XMLHttpRequest.open", "open()")}} 之後呼叫，同時也必須在 {{domxref("XMLHttpRequest.send", "send()")}} 之前呼叫。如果這個方法被呼叫了許多次，且設定的表頭是一樣的，那所有設定的值會被合併成一個單一的表頭請求。

在第一次呼叫 `setRequestHeader()` 之後的每一次的呼叫，都會把給定的文字附加在已存在的表頭內容之後。

If no {{HTTPHeader("Accept")}} header has been set using this, an `Accept` header with the type `"*/*"` is sent with the request when {{domxref("XMLHttpRequest.send", "send()")}} is called.

基於安全的理由，有些表頭只有使用者代理器可以使用。這些表頭包含了： {{Glossary("Forbidden_header_name", "forbidden header names", 1)}} 和 {{Glossary("Forbidden_response_header_name", "forbidden response header names", 1)}}.

> **備註：** For your custom fields, you may encounter a "**not allowed by Access-Control-Allow-Headers in preflight response**" exception when you send requests across domains. In this situation, you need to set up the {{HTTPHeader("Access-Control-Allow-Headers")}} in your response header at server side.

## 語法

```plain
XMLHttpRequest.setRequestHeader(header, value)
```

### 參數

- `header`
  - : 想要設定所屬值的表頭名稱。
- `value`
  - : 用來設定表頭本身的值。

### 回傳值

未定義。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Using XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [HTML in XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
