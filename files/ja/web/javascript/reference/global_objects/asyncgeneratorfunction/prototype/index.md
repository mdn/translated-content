---
title: AsyncGeneratorFunction.prototype.prototype
short-title: prototype
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/prototype
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`prototype`** は `AsyncGeneratorFunction.prototype` のプロパティで、すべての非同期ジェネレーター関数で共有されます。その値は [`AsyncGenerator.prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) です。 `async function*` 構文または`AsyncGeneratorFunction()` コンストラクターで生成されるそれぞれの非同期ジェネレーター関数も、自身の `prototype` プロパティを保有します。このプロパティのプロトタイプは `AsyncGeneratorFunction.prototype.prototype` です。非同期ジェネレーター関数が呼び出されると、その `prototype` プロパティが返される非同期ジェネレーターオブジェクトのプロトタイプとなります。

## 値

[`AsyncGenerator.prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) と同じオブジェクトです。技術的には `AsyncGeneratorFunction.prototype.prototype` の方が正確な名称ですが、`AsyncGenerator.prototype` の方が非同期ジェネレーターオブジェクトのプロトタイプであるという直感に訴えかけます。

{{js_property_attributes(0, 0, 1)}}

それぞれの `AsyncGeneratorFunction` インスタンスの `prototype` プロパティは、プロパティを持たない空のオブジェクトであり、そのプロトタイプは `AsyncGeneratorFunction.prototype.prototype` です。次のプロパティ属性を持っています。

{{js_property_attributes(1, 0, 0)}}

## 解説

非同期ジェネレーター関数のインスタンスには 2 つの `prototype` プロパティがあります。まず 1 つは自身の `prototype` プロパティです。 2 つ目はそのプロトタイプ（つまり `AsyncGeneratorFunction.prototype`）上の `prototype` プロパティです。（すべての非同期ジェネレーター関数は `AsyncGeneratorFunction` のインスタンスであるため、そのプロトタイプは `AsyncGeneratorFunction.prototype` であることを思い出してください。）

```js
async function* genFunc() {}
const AsyncGeneratorFunctionPrototype = Object.getPrototypeOf(genFunc);
console.log(Object.hasOwn(genFunc, "prototype")); // true
console.log(Object.hasOwn(AsyncGeneratorFunctionPrototype, "prototype")); // true
```

非同期ジェネレーター関数が呼び出されると、その非同期ジェネレーター関数の `prototype` プロパティが、返される非同期ジェネレーターオブジェクトのプロトタイプです。

```js
const gen = genFunc();
const proto = Object.getPrototypeOf;
console.log(proto(gen) === genFunc.prototype); // true
console.log(proto(proto(gen)) === AsyncGeneratorFunctionPrototype.prototype); // true
```

次の図は、非同期ジェネレーター関数とそのインスタンスのプロトタイプチェーンを示しています。それぞれの中空の矢印は継承関係（つまりプロトタイプリンク）を示し、それぞれの実線の矢印はプロパティ関係を示します。 なお、 `gen` から `genFunc` にアクセスする方法はありません。両者の間には `instanceof` 関係のみが存在します。

![非同期ジェネレーターと非同期ジェネレーター関数の継承図](https://mdn.github.io/shared-assets/images/diagrams/javascript/asyncgeneratorfunction/prototype-chain.svg)

## 仕様書

{{Specifications}}

## 関連情報

- [`async function*`](/ja/docs/Web/JavaScript/Reference/Statements/async_function*)
- [`async function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/async_function*)
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("GeneratorFunction")}}
- [継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [イテレーターとジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)
