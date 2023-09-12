---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
---

{{JSRef}}

**`TypeError`** オブジェクトは、演算が実行できなくなった時の新しいエラーを表します。特に値が期待された型ではなかった場合です (ただし、それに限りません)。

`TypeError` は以下のような場合に発生します。

- 関数に渡されたオペランドや引数が、その演算子や関数で期待された型と互換性がなかった場合
- 変更できない値を変更しようとした場合
- 適切ではない方法で値を使用しようとした場合

## コンストラクター

- {{jsxref("Global_Objects/TypeError/TypeError", "TypeError()")}}
  - : 新しい `TypeError` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxref("Error.prototype.message", "TypeError.prototype.message")}}
  - : エラーメッセージです。 ECMA-262 において {{jsxref("TypeError")}} は自身の `message` プロパティを提供するべきとされていますが、 [SpiderMonkey](/ja/docs/Mozilla/Projects/SpiderMonkey) では {{jsxref("Error.prototype.message")}} を継承しています。
- {{jsxref("Error.prototype.name", "TypeError.prototype.name")}}
  - : エラー名です。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.fileName", "TypeError.prototype.fileName")}}
  - : このエラーが発生したファイルのパスです。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.lineNumber", "TypeError.prototype.lineNumber")}}
  - : このエラーが発生したファイル内の行番号です。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.columnNumber", "TypeError.prototype.columnNumber")}}
  - : このエラーが発生した行内の桁番号です。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.stack", "TypeError.prototype.stack")}}
  - : スタックトレースです。 {{jsxref("Error")}} から継承しています。

## 例

### TypeError のキャッチ

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "null has no properties"
  console.log(e.name); // "TypeError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 2
  console.log(e.stack); // "@Scratchpad/2:2:3\n"
}
```

### TypeError の生成

```js
try {
  throw new TypeError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "TypeError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.TypeError")}}

## 関連情報

- {{jsxref("Error")}}
