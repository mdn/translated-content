---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
---

{{JSRef}}

**`SyntaxError`** オブジェクトは、構文的に不正なコードを解釈しようとした場合のエラーを表します。これは、 JavaScript エンジンが、コードを解析中に言語の構文に従わないトークンまたはトークンの順序に遭遇した場合に発生します。

## コンストラクター

- {{jsxref("Global_Objects/SyntaxError/SyntaxError", "SyntaxError()")}}
  - : 新しい `SyntaxError` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxref("Error.prototype.message", "SyntaxError.prototype.message")}}
  - : エラーメッセージです。 ECMA-262 において {{jsxref("SyntaxError")}} は自身の `message` プロパティを提供するべきとされていますが、 [SpiderMonkey](/ja/docs/Mozilla/Projects/SpiderMonkey) では {{jsxref("Error.prototype.message")}} を継承しています。
- {{jsxref("Error.prototype.name", "SyntaxError.prototype.name")}}
  - : エラー名です。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.fileName", "SyntaxError.prototype.fileName")}}
  - : このエラーが発生したファイルのパスです。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.lineNumber", "SyntaxError.prototype.lineNumber")}}
  - : このエラーが発生したファイル内の行番号です。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.columnNumber", "SyntaxError.prototype.columnNumber")}}
  - : このエラーが発生した行内の桁数です。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.stack", "SyntaxError.prototype.stack")}}
  - : スタックトレースです。 {{jsxref("Error")}} から継承しています。

## 例

### SyntaxError のキャッチ

```js
try {
  eval("hoo bar");
} catch (e) {
  console.error(e instanceof SyntaxError);
  console.error(e.message);
  console.error(e.name);
  console.error(e.fileName);
  console.error(e.lineNumber);
  console.error(e.columnNumber);
  console.error(e.stack);
}
```

### SyntaxError の生成

```js
try {
  throw new SyntaxError("Hello", "someFile.js", 10);
} catch (e) {
  console.error(e instanceof SyntaxError); // true
  console.error(e.message); // Hello
  console.error(e.name); // SyntaxError
  console.error(e.fileName); // someFile.js
  console.error(e.lineNumber); // 10
  console.error(e.columnNumber); // 0
  console.error(e.stack); // @debugger eval code:3:9
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.SyntaxError")}}

## 関連情報

- {{jsxref("Error")}}
