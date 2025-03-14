---
title: String.prototype.padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
---

{{JSRef}}{{SeeCompatTable}}

**`padStart()`** 會將用給定用於填充的字串，以重複的方式，插入到目標字串的起頭(左側)，直到目標字串到達指定長度。

## Syntax

```js-nolint
str.padStart(targetLength [, padString])
```

### Parameters

- `targetLength`
  - : 目標字串被填充後的長度。如果此參數小於原字串的長度，那將直接返回原字串。
- `padString` {{optional_inline}}
  - : 用來填充的字串。如果填充字串太長，則由左側開始，擷取所需要的長度。此參數預設值是空白 " " (U+0020).

### Return value

目標字串被填充到指定長度後，所得的新字串。

## Examples

```js
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("String.padEnd()")}}
