---
title: Array.prototype.indexOf()
short-title: indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`indexOf()`** は {{jsxref("Array")}} インスタンスのメソッドで、引数に与えられた内容と同じ内容を持つ最初の配列要素の添字を返します。存在しない場合は -1 を返します。

{{InteractiveExample("JavaScript デモ: Array.prototype.indexOf()")}}

```js interactive-example
const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// 予想される結果: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));
// 予想される結果: 4

console.log(beasts.indexOf("giraffe"));
// 予想される結果: -1
```

## 構文

```js-nolint
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

### 引数

- `searchElement`
  - : 検索する配列要素です。
- `fromIndex` {{optional_inline}}
  - : 検索し始める位置のゼロから始まるインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。
    - インデックスが負の場合、配列の末尾からさかのぼって数えます。 `-array.length <= fromIndex < 0` の場合、 `fromIndex + array.length` が使用されます。ただし、この場合でも配列は前から後ろに向けて検索されます。
    - `fromIndex < -array.length` または `fromIndex` が省略された場合は `0` が使用され、配列全体に対して検索が行われます。
    - `fromIndex >= array.length` の場合、配列の検索は行われず、 `false` が返されます。

### 返値

配列内にある最初の `searchElement` のインデックスです。見つからなかった場合は `-1`` です。

## 解説

`indexOf()` メソッドは `searchElement` と配列の要素を[厳密等価](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)（三重イコール演算子 `===` で使われるのと同じ方法）を使って比較します。 [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN) の値は等しい値として比較されることはないので、`indexOf()` は `searchElement` が `NaN` のときには常に `-1` を返します。

`indexOf()` メソッドは[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)の空スロットをスキップします。

`indexOf()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### indexOf() の使用

以下の例は `indexOf()` を使って、配列中のある値の位置を探しています。

```js
const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

`indexOf()` を使って `NaN` を検索することはできません。

```js
const array = [NaN];
array.indexOf(NaN); // -1
```

### ある要素の存在をすべて見つける

```js
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### 要素が配列内に存在するかどうかを調べ、配列を更新する

```js
function updateVegetablesCollection(veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log(`New veggies collection is: ${veggies}`);
  } else {
    console.log(`${veggie} already exists in the veggies collection.`);
  }
}

const veggies = ["potato", "tomato", "chillies", "green-pepper"];

updateVegetablesCollection(veggies, "spinach");
// New veggies collection is: potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, "spinach");
// spinach already exists in the veggies collection.
```

### 疎配列での indexOf() の使用

疎配列の空のスロットを検索するために `indexOf()` を使用することはできません。

```js
console.log([1, , 3].indexOf(undefined)); // -1
```

### 配列ではないオブジェクトに対する indexOf() の呼び出し

`indexOf()` メソッドは `this` の `length` プロパティを読み込み、次にキーが `length` より小さい非負の整数である各プロパティにアクセスします。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // length が 3 であるため indexOf() から無視される
};
console.log(Array.prototype.indexOf.call(arrayLike, 2));
// 0
console.log(Array.prototype.indexOf.call(arrayLike, 5));
// -1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.indexOf` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims による `Array.prototype.indexOf` のポリフィル](https://www.npmjs.com/package/array.prototype.indexof)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
