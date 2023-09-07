---
title: URIError
slug: Web/JavaScript/Reference/Global_Objects/URIError
---

{{JSRef}}

**`URIError`** 物件在全域的 URI 處理函式被錯誤使用時作為一個錯誤被拋出。

## 語法

```plain
new URIError([message[, fileName[, lineNumber]]])
```

### 參數

- `message`
  - : 可選。具人類可讀性的錯誤說明
- `fileName` {{non-standard_inline}}
  - : 可選。包含造成錯誤發生的程式碼的檔案名稱
- `lineNumber` {{non-standard_inline}}
  - : 可選。造成錯誤發生的程式碼行號

## 說明

`URIError` 在全域的 URI 處理函式被傳入了一個錯誤編碼的 URI 時被拋出。

## 屬性

- {{jsxref("URIError.prototype")}}
  - : 允許對一個 `URIError` 物件增加其屬性。

## 方法

普遍的 `URIError` 自身沒有包含方法，儘管他的確從原型鍊中繼承了一些。

## `URIError` 物件實體

### 屬性

- {{jsxref("Error.prototype.message", "URIError.prototype.message")}}
  - : Error message. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.name", "URIError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.cause", "URIError.prototype.cause")}}
  - : Error cause. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "URIError.prototype.fileName")}} {{non-standard_inline}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "URIError.prototype.lineNumber")}} {{non-standard_inline}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "URIError.prototype.columnNumber")}} {{non-standard_inline}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "URIError.prototype.stack")}} {{non-standard_inline}}
  - : Stack trace. Inherited from {{jsxref("Error")}}.

## 範例

### Catch 一個 `URIError`

```js
try {
  decodeURIComponent("%");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "malformed URI sequence"
  console.log(e.name); // "URIError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 2
  console.log(e.stack); // "@Scratchpad/2:2:3\n"
}
```

### 生成一個 `URIError`

```js
try {
  throw new URIError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "URIError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Error")}}
- {{jsxref("URIError.prototype")}}
- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
