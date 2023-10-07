---
title: Error.prototype.fileName
slug: Web/JavaScript/Reference/Global_Objects/Error/fileName
---

{{JSRef}} {{non-standard_header}}

**`fileName`** プロパティは、このエラーを起こしたファイルへのパスを含みます。

## 解説

この標準外のプロパティは、このエラーを起こしたファイルへのパスが入ります。デバッガーのコンテキストから呼び出された場合、例えば Firefox 開発ツールでは、"debugger eval code" が返されます。

## 例

### fileName の使用

```js
var e = new Error("Could not parse input");
throw e;
// e.fileName could look like "file:///C:/example.html"
```

## 仕様書

仕様の一部ではありません。

## ブラウザーの互換性

{{Compat("javascript.builtins.Error.fileName")}}

## 関連情報

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.fileName")}}
