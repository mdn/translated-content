---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
---

{{JSRef}}

**`EvalError`** オブジェクトは、グローバルの {{jsxref("Global_Objects/eval", "eval()")}} 関数に関するエラーを示します。この例外はもう JavaScript からは発生しなくなっていますが、互換性のために `EvalError` オブジェクトが残っています。

## コンストラクター

- {{jsxref("EvalError/EvalError", "EvalError()")}}
  - : 新しい `EvalError` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxref("Error.prototype.message", "EvalError.prototype.message")}}
  - : エラーメッセージです。 ECMA-262 において {{jsxref("EvalError")}} は自身の `message` プロパティを提供するべきとされていますが、 [SpiderMonkey](/ja/docs/Mozilla/Projects/SpiderMonkey) では {{jsxref("Error.prototype.message")}} を継承しています。
- {{jsxref("Error.prototype.name", "EvalError.prototype.name")}}
  - : エラー名です。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.fileName", "EvalError.prototype.fileName")}}
  - : このエラーが発生したファイルのパスです。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.lineNumber", "EvalError.prototype.lineNumber")}}
  - : このエラーが発生したファイル内の行番号です。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.columnNumber", "EvalError.prototype.columnNumber")}}
  - : このエラーが発生した行内の桁番号です。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.stack", "EvalError.prototype.stack")}}
  - : スタックトレースです。 {{jsxref("Error")}} から継承しています。

## 例

`EvalError` は現在の ECMAScript 仕様書では使われておらず、このためランタイムからも投げられません。しかしオブジェクト自体は、以前の仕様書との後方互換性のために残っています。

### EvalError の生成

```js
try {
  throw new EvalError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "EvalError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.EvalError")}}

## 関連情報

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/eval", "eval()")}}
