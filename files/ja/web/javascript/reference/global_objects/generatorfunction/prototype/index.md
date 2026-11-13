---
title: GeneratorFunction.prototype.prototype
short-title: prototype
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction/prototype
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`prototype`** は `GeneratorFunction.prototype` のプロパティで、すべてのジェネレーター関数で共有されます。その値は [`Generator.prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator) です。 `function*` 構文または`GeneratorFunction()` コンストラクターで生成されるそれぞれのジェネレーター関数も、自身の `prototype` プロパティを保有します。このプロパティのプロトタイプは `GeneratorFunction.prototype.prototype` です。ジェネレーター関数が呼び出されると、その `prototype` プロパティが返されるジェネレーターオブジェクトのプロトタイプとなります。

## 値

[`Generator.prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator) と同じオブジェクトです。技術的には `GeneratorFunction.prototype.prototype` の方が正確な名称ですが、`Generator.prototype` の方がジェネレーターオブジェクトのプロトタイプであるという直感に訴えかけます。

{{js_property_attributes(1, 0, 0)}}

それぞれの `GeneratorFunction` インスタンスの `prototype` プロパティは、プロパティを持たない空のオブジェクトであり、そのプロトタイプは `GeneratorFunction.prototype.prototype` です。次のプロパティ属性を持っています。

{{js_property_attributes(0, 0, 1)}}

## 解説

ジェネレーター関数のインスタンスには 2 つの `prototype` プロパティがあります。まず 1 つは自身の `prototype` プロパティです。 2 つ目はそのプロトタイプ（つまり `GeneratorFunction.prototype`）上の `prototype` プロパティです。（すべてのジェネレーター関数は `GeneratorFunction` のインスタンスであるため、そのプロトタイプは `GeneratorFunction.prototype` であることを思い出してください。）

```js
function* genFunc() {}
const GeneratorFunctionPrototype = Object.getPrototypeOf(genFunc);
console.log(Object.hasOwn(genFunc, "prototype")); // true
console.log(Object.hasOwn(GeneratorFunctionPrototype, "prototype")); // true
```

ジェネレーター関数が呼び出されると、そのジェネレーター関数の `prototype` プロパティが、返されるジェネレーターオブジェクトのプロトタイプです。

```js
const gen = genFunc();
const proto = Object.getPrototypeOf;
console.log(proto(gen) === genFunc.prototype); // true
console.log(proto(proto(gen)) === GeneratorFunctionPrototype.prototype); // true
```

次の図は、ジェネレーター関数とそのインスタンスのプロトタイプチェーンを示しています。それぞれの中空の矢印は継承関係（つまりプロトタイプリンク）を示し、それぞれの実線の矢印はプロパティ関係を示します。 なお、 `gen` から `genFunc` にアクセスする方法はありません。両者の間には `instanceof` 関係のみが存在します。

![ジェネレーターとジェネレーター関数の継承図](https://mdn.github.io/shared-assets/images/diagrams/javascript/generatorfunction/prototype-chain.svg)

## 仕様書

{{Specifications}}

## 関連情報

- [`function*`](/ja/docs/Web/JavaScript/Reference/Statements/function*)
- [`function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("GeneratorFunction")}}
- [継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [イテレーターとジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)
