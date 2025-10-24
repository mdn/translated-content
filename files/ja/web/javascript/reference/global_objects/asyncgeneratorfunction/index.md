---
title: AsyncGeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`AsyncGeneratorFunction`** オブジェクトは、[非同期ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function*)のメソッドを提供します。 JavaScript では、すべての非同期ジェネレータ関数は実際には `AsyncGeneratorFunction` オブジェクトです。

なお、`AsyncGeneratorFunction` はグローバルオブジェクトではありません。以下のコードで取得できます。

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
```

`AsyncGeneratorFunction` は {{jsxref("Function")}} のサブクラスです。

{{InteractiveExample("JavaScript デモ: AsyncGeneratorFunction", "taller")}}

```js interactive-example
const AsyncGeneratorFunction = async function* () {}.constructor;

const foo = new AsyncGeneratorFunction(`
  yield await Promise.resolve('a');
  yield await Promise.resolve('b');
  yield await Promise.resolve('c');
`);

let str = "";

async function generate() {
  for await (const val of foo()) {
    str += val;
  }
  console.log(str);
}

generate();
// 予想される結果: "abc"
```

## コンストラクター

- {{jsxref("AsyncGeneratorFunction/AsyncGeneratorFunction", "AsyncGeneratorFunction()")}}
  - : 新しい `AsyncGeneratorFunction` オブジェクトを生成します。

## インスタンスプロパティ

_親である {{jsxref("Function")}} から継承したインスタンスプロパティもあります_。

これらのプロパティは `AsyncGeneratorFunction.prototype` で定義されており、すべての `AsyncGeneratorFunction` インスタンスで共有されます。

- {{jsxref("Object/constructor", "AsyncGeneratorFunction.prototype.constructor")}}
  - : このインスタンスオブジェクトを生成したコンストラクター関数です。 `AsyncGeneratorFunction` インスタンスにおいては、初期値は {{jsxref("AsyncGeneratorFunction/AsyncGeneratorFunction", "AsyncGeneratorFunction")}} コンストラクターです。
- `AsyncGeneratorFunction.prototype.prototype`
  - : すべての非同期ジェネレータ関数は同じ [`prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) プロパティを共有していて、それは [`AsyncGenerator.prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) です。 `async function*` 構文または `AsyncGeneratorFunction()` コンストラクターで生成されるそれぞれの非同期ジェネレーター関数も、自身の `prototype` プロパティを保持します。このプロパティのプロトタイプは `AsyncGeneratorFunction.prototype.prototype` です。非同期ジェネレーター関数が呼び出されると、その `prototype` プロパティは返される非同期ジェネレーターオブジェクトのプロトタイプとなります。
- `AsyncGeneratorFunction.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"AsyncGeneratorFunction"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用します。

以下のプロパティは、それぞれの `AsyncGeneratorFunction` インスタンスが自身で持つプロパティです。

- {{jsxref("AsyncGeneratorFunction/prototype", "prototype")}}
  - : 関数が [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 演算子と共にコンストラクターとして使用される場合に使用されます。新しいオブジェクトのプロトタイプとなります。

## インスタンスメソッド

_親である {{jsxref("Function")}} からインスタンスメソッドを継承しています_。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`async function*`](/ja/docs/Web/JavaScript/Reference/Statements/async_function*)
- [`async function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/async_function*)
- {{jsxref("Function")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "Functions", "", 1)}}
