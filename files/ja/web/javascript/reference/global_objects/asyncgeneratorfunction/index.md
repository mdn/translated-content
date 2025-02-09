---
title: AsyncGeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction
l10n:
  sourceCommit: d19dc31570f62196a5837be38bd0b11c45e67b05
---

{{JSRef}}

**`AsyncGeneratorFunction`** オブジェクトは、[非同期ジェネレータ関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function*) のメソッドを提供します。 JavaScript で、すべての非同期ジェネレータ関数は実際には `AsyncGeneratorFunction` オブジェクトです。

なお、`AsyncGeneratorFunction` はグローバルオブジェクトではありません。以下のコードで取得できます。

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
```

`AsyncGeneratorFunction` は {{jsxref("Function")}} のサブクラスです。

{{EmbedInteractiveExample("pages/js/async-functionasterisk-function.html", "taller")}}

## コンストラクター

- {{jsxref("AsyncGeneratorFunction/AsyncGeneratorFunction", "AsyncGeneratorFunction()")}}
  - : 新しい `AsyncGeneratorFunction` オブジェクトを生成します。

## インスタンスプロパティ

_親である {{jsxref("Function")}} から継承したインスタンスプロパティもあります_。

これらのプロパティは `AsyncGeneratorFunction.prototype` で定義されており、すべての `AsyncGeneratorFunction` インスタンスで共有されます。

- {{jsxref("Object/constructor", "AsyncGeneratorFunction.prototype.constructor")}}
  - : このインスタンスオブジェクトを生成したコンストラクター関数です。 `AsyncGeneratorFunction` インスタンスにおいては、初期値は {{jsxref("AsyncGeneratorFunction/AsyncGeneratorFunction", "AsyncGeneratorFunction")}} コンストラクターです。
- `AsyncGeneratorFunction.prototype.prototype`
  - : すべての非同期ジェネレータ関数は同じ [`prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) プロパティを共有していて、それは [`AsyncGenerator.prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) です。それぞれの非同期ジェネレーター関数のインスタンスは自分自身で `prototype` プロパティも持ちます。非同期ジェネレーター関数が呼び出されると、返される非同期ジェネレーターオブジェクトは非同期ジェネレーター関数の `prototype` プロパティを継承し、そのプロパティは `AsyncGeneratorFunction.prototype` を継承します。
- `AsyncGeneratorFunction.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"AsyncGeneratorFunction"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用します。

## インスタンスメソッド

_親である {{jsxref("Function")}} からインスタンスメソッドを継承しています_。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`async function*` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/async_function*)
- [`async function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/async_function*)
- {{jsxref("Function")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "Functions", "", 1)}}
