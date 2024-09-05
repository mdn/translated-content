---
title: Array.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`[Symbol.iterator]()`** は {{jsxref("Array")}} インスタンスのメソッドで、[反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を実装しており、[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)や {{jsxref("Statements/for...of", "for...of")}} ループのような反復可能オブジェクトを期待するほとんどの構文で配列を利用することができます。配列の各インデックスの値を返す[配列イテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)を返します。

このプロパティの初期値は {{jsxref("Array.prototype.values")}} プロパティの初期値と同じ関数オブジェクトです。

{{EmbedInteractiveExample("pages/js/array-prototype-@@iterator.html")}}

## 構文

```js-nolint
array[Symbol.iterator]()
```

### 引数

なし。

### 返値

{{jsxref("Array.prototype.values()")}} の返値と同じです。これは配列内のすべてのインデックスの値を生成する新しい[反復可能イテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)です。

## 例

### for...of ループを用いた反復処理

このメソッドを直接呼び出す必要はほとんどないことに注意してください。 `[Symbol.iterator]() メソッドが存在することで、配列を[反復処理可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)にすることができ、 `for...of` ループのような反復処理構文では、自動的にこのメソッドを呼び出して、ループするイテレーターを取得します。

#### HTML

```html
<ul id="letterResult"></ul>
```

#### JavaScript

```js
const arr = ["a", "b", "c"];
const letterResult = document.getElementById("letterResult");
for (const letter of arr) {
  const li = document.createElement("li");
  li.textContent = letter;
  letterResult.appendChild(li);
}
```

#### 結果

{{EmbedLiveSample("Iteration_using_for...of_loop", "", "")}}

### イテレーターを手動で手繰る

返されたイテレーターオブジェクトの `next()` メソッドを手動で呼び出すことで、反復処理を最大限に制御することもできます。

```js
const arr = ["a", "b", "c", "d", "e"];
const arrIter = arr[Symbol.iterator]();
console.log(arrIter.next().value); // a
console.log(arrIter.next().value); // b
console.log(arrIter.next().value); // c
console.log(arrIter.next().value); // d
console.log(arrIter.next().value); // e
```

### 文字列と文字列配列を同じ関数で処理

[文字列](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)と配列はどちらもイテレータープロトコルを実装しているので、汎用関数は両方の入力を同じ方法で処理するように設計することができます。これは、 {{jsxref("Array.prototype.values()")}} を直接呼び出すよりも優れており、入力が配列であるか、少なくともそのようなメソッドを持つオブジェクトであることを要求されます。

```js
function logIterable(it) {
  if (typeof it[Symbol.iterator] !== "function") {
    console.log(it, "is not iterable.");
    return;
  }
  for (const letter of it) {
    console.log(letter);
  }
}

// Array
logIterable(["a", "b", "c"]);
// a
// b
// c

// String
logIterable("abc");
// a
// b
// c

// Number
logIterable(123);
// 123 is not iterable.
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype[Symbol.iterator]` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)ガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [`TypedArray.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- [`String.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
- {{jsxref("Symbol.iterator")}}
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
