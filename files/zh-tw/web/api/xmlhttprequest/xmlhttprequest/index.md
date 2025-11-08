---
title: XMLHttpRequest：XMLHttpRequest() 建構子
slug: Web/API/XMLHttpRequest/XMLHttpRequest
l10n:
  sourceCommit: 5e270e3cdab4f3c8ad3f5752976c72c6e8312eb9
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

**`XMLHttpRequest()`** 建構子會建立一個新的 {{domxref("XMLHttpRequest")}}。

## 語法

```js-nolint
new XMLHttpRequest()
// 非標準
new XMLHttpRequest(options)
```

### 參數

此建構子沒有標準參數。然而，Firefox 允許一個非標準參數：

- `options` {{non-standard_inline}}
  - : 一個可以包含以下旗標的物件：
    - `mozAnon`
      - : 一個布林。將此旗標設為 `true` 會使瀏覽器在擷取資源時不暴露{{Glossary("origin", "來源")}}和使用者憑證。最重要的是，這表示除非使用 `setRequestHeader` 明確新增，否則不會傳送 {{Glossary("Cookie", "Cookie")}}。
    - `mozSystem`
      - : 一個布林。將此旗標設為 `true` 時，請求將不會強制執行同源政策。

### 回傳值

一個新的 {{domxref("XMLHttpRequest")}} 物件。在呼叫 {{domxref("XMLHttpRequest.send", "send()")}} 將請求傳送至伺服器之前，必須至少先呼叫 {{domxref("XMLHttpRequest.open", "open()")}} 來初始化該物件。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [XMLHttpRequest 中的 HTML](/zh-TW/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
