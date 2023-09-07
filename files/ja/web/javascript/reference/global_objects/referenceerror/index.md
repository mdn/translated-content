---
title: ReferenceError
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError
---

{{JSRef}}

**`ReferenceError`** オブジェクトは存在しない変数が参照された場合のエラーを表します。

## コンストラクター

- {{jsxref("Global_Objects/ReferenceError/ReferenceError", "ReferenceError()")}}
  - : 新しい `ReferenceError` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxref("Error.prototype.message", "ReferenceError.prototype.message")}}
  - : エラーメッセージです。 ECMA-262 において {{jsxref("ReferenceError")}} は自身の `message` プロパティを提供するべきとされていますが、 [SpiderMonkey](/ja/docs/Mozilla/Projects/SpiderMonkey) では {{jsxref("Error.prototype.message")}} を継承しています。
- {{jsxref("Error.prototype.name", "ReferenceError.prototype.name")}}
  - : エラー名です。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.fileName", "ReferenceError.prototype.fileName")}}
  - : このエラーが発生したファイルのパスです。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.lineNumber", "ReferenceError.prototype.lineNumber")}}
  - : このエラーが発生したファイル内の行番号です。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.columnNumber", "ReferenceError.prototype.columnNumber")}}
  - : このエラーが発生した行内の桁番号です。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.stack", "ReferenceError.prototype.stack")}}
  - : スタックトレースです。 {{jsxref("Error")}} から継承しています。

## 例

### ReferenceError のキャッチ

```js
try {
  let a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "undefinedVariable is not defined"
  console.log(e.name); // "ReferenceError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 6
  console.log(e.stack); // "@Scratchpad/2:2:7\n"
}
```

### ReferenceError の生成

```js
try {
  throw new ReferenceError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "ReferenceError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.ReferenceError")}}

## 関連情報

- {{jsxref("Error")}}
