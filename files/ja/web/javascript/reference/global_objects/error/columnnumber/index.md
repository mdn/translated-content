---
title: Error.prototype.columnNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
---

{{JSRef}} {{non-standard_header}}

**`columnNumber`** プロパティは、このエラーを起こしたファイルの行内の列番号が入ります。

## 例

### columnNumber の使用

```js
var e = new Error("Could not parse input");
throw e;
console.log(e.columnNumber); // 0
```

## 仕様書

仕様の一部ではありません。

## ブラウザーの互換性

{{Compat("javascript.builtins.Error.columnNumber")}}

## 関連情報

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.lineNumber")}}
- {{jsxref("Error.prototype.fileName")}}
