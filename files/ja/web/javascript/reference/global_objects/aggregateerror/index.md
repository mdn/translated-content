---
title: AggregateError
slug: Web/JavaScript/Reference/Global_Objects/AggregateError
l10n:
  sourceCommit: 1d2e1875bdfdd2fb8d0806535220bbd56d3a091d
---

**`AggregateError`** オブジェクトは、複数のエラーを 1 つのエラーにまとめる必要があるときのエラーを表します。これは一つの操作で複数のエラーを報告する必要があるときに発生します。例えば {{jsxref("Promise.any()")}} において、渡されたすべてのプロミスが拒否された場合などです。

{{jsxref("SuppressedError")}} と比較すると、`AggregateError` は無関係のエラーのリストを表すのに対し、 `SuppressedError` は他のエラーを処理中に発生したエラーを表します。

`AggregateError` は {{jsxref("Error")}} のサブクラスです。

## コンストラクター

- {{jsxref("AggregateError/AggregateError", "AggregateError()")}}
  - : 新しい `AggregateError` オブジェクトを生成します。

## インスタンスプロパティ

_親である {{jsxref("Error")}} から継承したインスタンスプロパティもあります_。

以下のプロパティは `AggregateError.prototype` に定義されており、すべての `AggregateError` インスタンスで共有されます。

- {{jsxref("Object/constructor", "AggregateError.prototype.constructor")}}
  - : このインスタンスオブジェクトを生成したコンストラクター関数です。`AggregateError` インスタンスでは、初期値は {{jsxref("AggregateError/AggregateError", "AggregateError")}} コンストラクターです。
- {{jsxref("Error/name", "AggregateError.prototype.name")}}
  - : エラーの型の名前を表します。`AggregateError.prototype.name` では、初期値は `"AggregateError"` です。

以下のプロパティは、それぞれの `AggregateError` インスタンス自身のプロパティです。

- {{jsxref("AggregateError/errors", "errors")}}
  - : まとめられたエラーを表す配列です。

## インスタンスメソッド

_親である {{jsxref("Error")}} からインスタンスメソッドを継承しています_。

## 例

### AggregateError の捕捉

```js
Promise.any([Promise.reject(new Error("some error"))]).catch((e) => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "All Promises rejected"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
});
```

### AggregateError の生成

```js
try {
  throw new AggregateError([new Error("some error")], "Hello");
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`AggregateError` の `core-js` におけるポリフィル](https://github.com/zloirock/core-js#ecmascript-promise)
- [es-shims による `AggregateError` のポリフィル](https://www.npmjs.com/package/es-aggregate-error)
- {{jsxref("Error")}}
- {{jsxref("Promise.any")}}
