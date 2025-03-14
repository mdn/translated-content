---
title: AsyncFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
l10n:
  sourceCommit: d19dc31570f62196a5837be38bd0b11c45e67b05
---

{{JSRef}}

**`AsyncFunction`** オブジェクトは、[非同期関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function)のメソッドを提供します。JavaScript では、すべての非同期関数が実際に `AsyncFunction` オブジェクトです。

`AsyncFunction` はグローバルオブジェクトでは*ない*ことに注意してください。これは以下のようなコードで取得することができます。

```js
const AsyncFunction = async function () {}.constructor;
```

`AsyncFunction` は {{jsxref("Function")}} のサブクラスです。

## コンストラクター

- {{jsxref("AsyncFunction/AsyncFunction", "AsyncFunction()")}}
  - : 新しい `AsyncFunction` オブジェクトを生成します。

## インスタンスプロパティ

_インスタンスプロパティを親である {{jsxref("Function")}} から継承しています_。

これらのプロパティは `AsyncFunction.prototype` で定義されており、すべての `AsyncFunction` のインスタンスで共有されます。

- {{jsxref("Object/constructor", "AsyncFunction.prototype.constructor")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数。`AsyncFunction` インスタンスの場合、初期値は {{jsxref("AsyncFunction/AsyncFunction", "AsyncFunction")}} コンストラクターです。
- `AsyncFunction.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は、文字列 `"AsyncFunction"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

> **メモ:** `AsyncFunction` のインスタンスには [`prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) プロパティがありません。

## インスタンスメソッド

_インスタンスメソッドを親である {{jsxref("Function")}} から継承しています_。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`async function` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/async_function)
- [`async function` 式](/ja/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("Function")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "関数", "", 1)}}
