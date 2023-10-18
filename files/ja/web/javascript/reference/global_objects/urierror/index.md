---
title: URIError
slug: Web/JavaScript/Reference/Global_Objects/URIError
---

{{JSRef}}

**`URIError`** オブジェクトは、グローバル URI 処理関数が間違った方法で使用された場合のエラーを表します。

## コンストラクター

- {{jsxref("Global_Objects/URIError/URIError", "URIError()")}}
  - : 新しい `URIError` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxref("Error.prototype.message", "URIError.prototype.message")}}
  - : エラーメッセージです。 ECMA-262 において {{jsxref("URIError")}} は自身の `message` プロパティを提供するべきとされていますが、 [SpiderMonkey](/ja/docs/Mozilla/Projects/SpiderMonkey) では {{jsxref("Error.prototype.message")}} を継承しています。
- {{jsxref("Error.prototype.name", "URIError.prototype.name")}}
  - : エラー名です。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.fileName", "URIError.prototype.fileName")}}
  - : このエラーが発生したファイルのパスです。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.lineNumber", "URIError.prototype.lineNumber")}}
  - : このエラーが発生したファイル内の行番号です。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.columnNumber", "URIError.prototype.columnNumber")}}
  - : このエラーが発生した行内の桁番号です。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.stack", "URIError.prototype.stack")}}
  - : スタックトレースです。 {{jsxref("Error")}} から継承しています。

## 例

### URIError のキャッチ

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

### URIError の生成

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.URIError")}}

## 関連情報

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
