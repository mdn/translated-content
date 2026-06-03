---
title: "Error: fileName"
short-title: fileName
slug: Web/JavaScript/Reference/Global_Objects/Error/fileName
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

**`fileName`** は {{jsxref("Error")}} インスタンスのデータプロパティで、このエラーを起こしたファイルへのパスを含みます。

## 値

文字列です。

{{js_property_attributes(1, 0, 1)}}

## 解説

この標準外のプロパティは、このエラーを起こしたファイルへのパスが入ります。デバッガーのコンテキストから呼び出された場合、例えば Firefox 開発ツールでは、"debugger eval code" が返されます。

## 例

### fileName の使用

```js
const e = new Error("Could not parse input");
throw e;
// e.fileName could look like "file:///C:/example.html"
```

## 仕様書

仕様書に含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.lineNumber")}}
