---
title: URIError
slug: Web/JavaScript/Reference/Global_Objects/URIError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`URIError`** 物件表示一個在全域 URI 處理函式使用方式錯誤時的錯誤。

`URIError` 是一個{{Glossary("serializable object", "可序列化物件")}}，所以它可以使用 {{DOMxRef("Window.structuredClone", "structuredClone()")}} 複製，或在 [Worker](/zh-TW/docs/Web/API/Worker) 之間使用 {{domxref("Worker/postMessage()", "postMessage()")}} 複製。

`URIError` 是 {{jsxref("Error")}} 的子類別。

## 建構子

- {{jsxref("URIError/URIError", "URIError()")}}
  - : 建立一個新的 `URIError` 物件。

## 實例屬性

_也繼承其父實例 {{jsxref("Error")}} 的實例屬性_。

這些屬性定義在 `URIError.prototype` 上，並由所有 `URIError` 實例共享。

- {{jsxref("Object/constructor", "URIError.prototype.constructor")}}
  - : 建立實例物件的建構函式。對於 `URIError` 實例，初始值為 {{jsxref("URIError/URIError", "URIError")}} 建構子。
- {{jsxref("Error/name", "URIError.prototype.name")}}
  - : 表示錯誤類型的名稱。對於 `URIError.prototype.name`，初始值為 `"URIError"`。

## 實例方法

_繼承其父實例 {{jsxref("Error")}} 的實例方法_。

## 範例

### 捕捉 URIError

```js
try {
  decodeURIComponent("%");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "malformed URI sequence"
  console.log(e.name); // "URIError"
  console.log(e.stack); // 錯誤的堆疊
}
```

### 建立 URIError

```js
try {
  throw new URIError("你好");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "你好"
  console.log(e.name); // "URIError"
  console.log(e.stack); // 錯誤的堆疊
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Error")}}
- {{jsxref("decodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
