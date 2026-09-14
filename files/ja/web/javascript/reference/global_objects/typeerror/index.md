---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`TypeError`** オブジェクトは、演算が実行できなくなった時の新しいエラーを表します。特に値が期待された型ではなかった場合です（ただし、それに限りません）。

`TypeError` は以下のような場合に発生します。

- 関数に渡されたオペランドや引数が、その演算子や関数で期待された型と互換性がなかった場合
- 変更できない値を変更しようとした場合
- 適切ではない方法で値を使用しようとした場合

`TypeError` は{{Glossary("serializable object", "シリアライズ可能オブジェクト")}}であり、{{DOMxRef("Window.structuredClone", "structuredClone()")}} で複製したり、[ワーカー](/ja/docs/Web/API/Worker)間で {{domxref("Worker/postMessage()", "postMessage()")}} を用いてコピーしたりすることができます。

`TypeError` は {{jsxref("Error")}} のサブクラスです。

## コンストラクター

- {{jsxref("TypeError/TypeError", "TypeError()")}}
  - : 新しい `TypeError` オブジェクトを生成します。

## インスタンスプロパティ

_親である {{jsxref("Error")}} から継承したインスタンスプロパティもあります。_

これらのプロパティは `TypeError.prototype` に定義されており、すべての `TypeError` インスタンスで共有されます。

- {{jsxref("Object/constructor", "TypeError.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。`TypeError` インスタンスの場合、初期値は {{jsxref("TypeError/TypeError", "TypeError")}} コンストラクターです。
- {{jsxref("Error/name", "TypeError.prototype.name")}}
  - : エラーの型の名前を表します。`TypeError.prototype.name` の場合、初期値は `"TypeError"` です。

## インスタンスメソッド

_親である {{jsxref("Error")}} から継承したインスタンスメソッドもあります。_

## 例

### TypeError の捕捉

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "null has no properties"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // エラーのスタック
}
```

### TypeError の生成

```js
try {
  throw new TypeError("Hello");
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // エラーのスタック
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error")}}
