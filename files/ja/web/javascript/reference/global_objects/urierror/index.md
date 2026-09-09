---
title: URIError
slug: Web/JavaScript/Reference/Global_Objects/URIError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`URIError`** オブジェクトは、グローバル URI 処理関数が間違った方法で使用された場合のエラーを表します。

`URIError` は{{Glossary("serializable object", "シリアライズ可能オブジェクト")}}であるため、{{DOMxRef("Window.structuredClone", "structuredClone()")}} で複製したり、[ワーカー](/ja/docs/Web/API/Worker)間で {{domxref("Worker/postMessage()", "postMessage()")}} を使用してコピーしたりすることができます。

`URIError` は {{jsxref("Error")}} のサブクラスです。

## コンストラクター

- {{jsxref("URIError.URIError", "URIError()")}}
  - : 新しい `URIError` オブジェクトを生成します。

## インスタンスプロパティ

_親である {{jsxref("Error")}} から継承したプロパティもあります。_

これらのプロパティは `URIError.prototype` で定義されており、すべての `URIError` インスタンスで共有されます。

- {{jsxref("Object/constructor", "URIError.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。`URIError` のインスタンスでは、初期値は {{jsxref("URIError/URIError", "URIError")}} コンストラクターです。
- {{jsxref("Error/name", "URIError.prototype.name")}}
  - : エラーの種類の名前を表します。`URIError.prototype.name` の場合、初期値は `"URIError"` です。

## インスタンスメソッド

_親である {{jsxref("Error")}} から継承したメソッドがあります_。

## 例

### URIError の捕捉

```js
try {
  decodeURIComponent("%");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "malformed URI sequence"
  console.log(e.name); // "URIError"
  console.log(e.stack); // このエラーのスタック
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
  console.log(e.stack); // このエラーのスタック
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error")}}
- {{jsxref("decodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
