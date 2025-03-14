---
title: Error.prototype.columnNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
---

{{JSRef}} {{non-standard_header}}

「行數」屬性含括了檔案中引起錯誤的所在行數。

## 範例

### 使用 `columnNumber`

```js
var e = new Error("Could not parse input");
throw e;
console.log(e.columnNumber); // 0
```

## 規格

不是任何規格的一部份，尚未標準化。

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.lineNumber")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}
