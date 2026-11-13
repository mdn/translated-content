---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`GeneratorFunction`** オブジェクトは、[ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)のメソッドを提供します。JavaScript では、すべてのジェネレーター関数は実際には `GeneratorFunction` オブジェクトです。

`GeneratorFunction` はグローバルオブジェクトではないことに注意してください。次のコードを評価することによって得ることができます。

```js
const GeneratorFunction = function* () {}.constructor;
```

`GeneratorFunction` は {{jsxref("Function")}} のサブクラスです。

{{InteractiveExample("JavaScript デモ: GeneratorFunction", "taller")}}

```js interactive-example
const GeneratorFunction = function* () {}.constructor;

const foo = new GeneratorFunction(`
  yield 'a';
  yield 'b';
  yield 'c';
`);

let str = "";
for (const val of foo()) {
  str += val;
}

console.log(str);
// 予想される結果: "abc"
```

## コンストラクター

- {{jsxref("GeneratorFunction/GeneratorFunction", "GeneratorFunction()")}}
  - : 新しい `GeneratorFunction` オブジェクトを生成します。

## インスタンスプロパティ

_親である {{jsxref("Function")}} から継承したプロパティもあります_。

これらのプロパティは `GeneratorFunction.prototype` で定義されており、すべての `GeneratorFunction` インスタンスで共有されます。

- {{jsxref("Object/constructor", "GeneratorFunction.prototype.constructor")}}
  - : インスタンスオブジェクトを作成するコンストラクター関数です。`GeneratorFunction` インスタンスの場合、初期値は {{jsxref("GeneratorFunction/GeneratorFunction", "GeneratorFunction")}} コンストラクターです。
- {{jsxref("GeneratorFunction.prototype.prototype")}}
  - : すべてジェネレーター関数は、同じ [`prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) プロパティを共有しており、これは [`Generator.prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator) です。 `function*` 構文または `GeneratorFunction()` コンストラクターで生成されたそれぞれのジェネレーター関数も、自身の `prototype` プロパティを保有しています。このプロパティのプロトタイプは `GeneratorFunction.prototype.prototype` です。ジェネレーター関数が呼び出されると、その `prototype` プロパティが返されるジェネレータオブジェクトのプロトタイプとなります。
- `GeneratorFunction.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"GeneratorFunction"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されています。

これらのプロパティは、それぞれの`GeneratorFunction`インスタンスが自分自身で持っているプロパティです。

- {{jsxref("GeneratorFunction/prototype", "prototype")}}
  - : 関数が [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 演算子と共にコンストラクターとして使用される場合に使用されます。新しいオブジェクトのプロトタイプとなります。

## インスタンスメソッド

_親である {{jsxref("Function")}} から継承したメソッドがあります_。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`function*`](/ja/docs/Web/JavaScript/Reference/Statements/function*)
- [`function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Function")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("Functions", "関数", "", 1)}}
