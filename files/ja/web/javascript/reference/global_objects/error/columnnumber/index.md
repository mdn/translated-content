---
title: "Error: columnNumber"
short-title: columnNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

**`columnNumber`** は {{jsxref("Error")}} インスタンスのデータプロパティで、このエラーを起こしたファイルの行内の列番号が入ります。

## 値

正の整数です。

{{js_property_attributes(1, 0, 1)}}

## 例

### columnNumber の使用

```js
try {
  throw new Error("Could not parse input");
} catch (err) {
  console.log(err.columnNumber); // 9
}
```

## 仕様書

仕様書に含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.lineNumber")}}
- {{jsxref("Error.prototype.fileName")}}
