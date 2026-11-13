---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`SyntaxError`** オブジェクトは、構文的に不正なコードを解釈しようとした場合のエラーを表します。これは、 JavaScript エンジンがコード解析中に、言語の構文に従わないトークンまたはトークンの順序に遭遇した場合に発生します。

`SyntaxError` は{{Glossary("serializable object", "シリアライズ可能オブジェクト")}}であるため、{{DOMxRef("Window.structuredClone", "structuredClone()")}} で複製したり、[ワーカー](/ja/docs/Web/API/Worker)間で {{domxref("Worker/postMessage()", "postMessage()")}} を使用してコピーしたりすることができます。

`SyntaxError` は {{jsxref("Error")}} のサブクラスです。

## コンストラクター

- {{jsxref("SyntaxError/SyntaxError", "SyntaxError()")}}
  - : 新しい `SyntaxError` オブジェクトを生成します。

## インスタンスプロパティ

_親である {{jsxref("Error")}} から継承したプロパティもあります_。

これらのプロパティは `SyntaxError.prototype` で定義されており、すべての `SyntaxError` インスタンスで共有されます。

- {{jsxref("Object/constructor", "SyntaxError.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数。`SyntaxError` インスタンスの場合、初期値は {{jsxref("SyntaxError/SyntaxError", "SyntaxError")}} コンストラクターとなります。
- {{jsxref("Error/name", "SyntaxError.prototype.name")}}
  - : エラーの種類の名前を表します。`SyntaxError.prototype.name` の場合、初期値は `"SyntaxError"` です。

## インスタンスメソッド

_親である {{jsxref("Error")}} から継承したメソッドがあります_。

## 例

### SyntaxError の捕捉

```js
try {
  eval("hoo bar");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // Stack of the error
}
```

### SyntaxError の生成

```js
try {
  throw new SyntaxError("Hello");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // Stack of the error
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error")}}
