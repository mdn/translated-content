---
title: TypedArray.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`[Symbol.iterator]()`** は {{jsxref("TypedArray")}} インスタンスのプロパティで、[反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を実装し、型付き配列を[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)や {{jsxref("Statements/for...of", "for...of")}} ループのような反復可能オブジェクトを想定するほとんどの構文で利用できるようにするためのものです。この型付き配列の各要素の値を返す[配列イテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)を返します。

このプロパティの初期値は {{jsxref("TypedArray.prototype.values")}} プロパティの初期値と同じ関数オブジェクトです。

{{EmbedInteractiveExample("pages/js/typedarray-prototype-@@iterator.html")}}

## 構文

```js-nolint
typedArray[Symbol.iterator]()
```

### 引数

なし。

### 返値

{{jsxref("TypedArray.prototype.values()")}} と同じ返値で、この型付き配列のすべての要素の値を返す、新しい[反復可能イテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)を返します。

## 例

### for...of ループを使用した反復処理

このメソッドを直接呼び出す必要はめったにないことに注意してください。`Symbol.iterator` メソッドの存在により、型付き配列は[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)となり、 `for...of` ループのような反復処理構文は、ループするために自動的にこのメソッドを呼び出し、イテレーターを取得します。

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
for (const n of arr) {
  console.log(n);
}
```

### 手動でイテレーターを手繰る

反復処理を最大限に制御するために、返すイテレーターオブジェクトの `next()` メソッドを手動で呼び出すことができます。

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const arrIter = arr[Symbol.iterator]();
console.log(arrIter.next().value); // 10
console.log(arrIter.next().value); // 20
console.log(arrIter.next().value); // 30
console.log(arrIter.next().value); // 40
console.log(arrIter.next().value); // 50
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype[Symbol.iterator]` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- {{jsxref("TypedArray.prototype.values()")}}
- {{jsxref("Symbol.iterator")}}
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
