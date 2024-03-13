---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`includes()`** は {{jsxref("Array")}} インスタンスのメソッドで、特定の要素が配列に含まれているかどうかを `true` または `false` で返します。

{{EmbedInteractiveExample("pages/js/array-includes.html")}}

## 構文

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### 引数

- `searchElement`
  - : 検索する値です。
- `fromIndex` {{optional_inline}}
  - : 検索し始める位置のゼロから始まるインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。
    - インデックスが負の場合、配列の末尾からさかのぼって数えます。 `fromIndex < 0` の場合、 `fromIndex + array.length` が使用されます。ただし、この場合でも配列は前から後ろに向けて検索されます。
    - `fromIndex < -array.length` または `fromIndex` が省略された場合は `0` が使用され、配列全体に対して検索が行われます。
    - `fromIndex >= array.length` の場合、配列の検索は行われず、 `false` が返されます。

### 返値

論理値で、`searchElement` の値が配列内（`fromIndex` が指定されていた場合は、配列のその位置以降の部分）にあった場合は `true` を返します。

## 解説

`includes()` は `searchElement` を [SameValueZero](/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness#同値ゼロ等価性) アルゴリズムを使用して比較します。ゼロの値は符号に関わらず、すべて等しい（すなわち、`-0` は `0` と等しい）とみなされますが、`false` は `0` と同じとはみなされ*ません*。 [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN) は正しく検索することができます。

[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)で使用する場合、 `includes()` メソッドは空のスロットを `undefined` という値があるかのように反復処理します。

`includes()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### includes() の使用

```js
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
["1", "2", "3"].includes(3); // false
```

### fromIndex が配列の長さと同じか大きい場合

`fromIndex` が配列の長さと同じか大きい場合は、配列を検索せずに `false` を返します。

```js
const arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false
```

### 計算された位置が 0 より小さい場合

`fromIndex` が負の値である場合、`searchElement` の検索を開始するための配列内の位置として、計算により位置が算出されます。計算された位置が `0` 以下の場合は、配列全体が検索されます。

```js
// 配列の長さは 3
// fromIndex は -100
// 補正されたインデックスは 3 + (-100) = -97

const arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false
```

### 疎配列に対する includes() の使用

疎配列で `undefined` を検索して `true` を取得することができます。

```js
console.log([1, , 3].includes(undefined)); // true
```

### 配列でないオブジェクトに対する includes() の呼び出し

`includes()` メソッドは `this` の `length` プロパティを読み込み、次にキーが `length` より小さい非負の整数であるそれぞれのプロパティにアクセスします。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 1, // length が 3 なので includes() からは無視される
};
console.log(Array.prototype.includes.call(arrayLike, 2));
// true
console.log(Array.prototype.includes.call(arrayLike, 1));
// false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.includes` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
