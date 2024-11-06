---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`flat()`** は {{jsxref("Array")}} インスタンスのメソッドで、すべてのサブ配列の要素を指定した深さで再帰的に結合した新しい配列を生成します。

{{EmbedInteractiveExample("pages/js/array-flat.html")}}

## 構文

```js-nolint
flat()
flat(depth)
```

### 引数

- `depth` {{optional_inline}}
  - : ネストされた配列構造で、どの程度の深さをフラット化するか指定する深さレベルです。
    既定値は 1 です。

### 返値

サブ配列の要素を結合した新しい配列。

## 解説

`flat()` メソッドは[コピーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#コピーメソッドと変更メソッド)です。これは `this` を変更するのではなく、元の配列と同じ要素を格納した[シャローコピー](/ja/docs/Glossary/Shallow_copy)を返します。

`flat()` メソッドは、フラット化される配列が[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)の場合、空のスロットを無視します。例えば、 `depth` が 1 の場合、ルート配列と最初の入れ子配列の空のスロットは無視されますが、それ以上の入れ子配列の空のスロットは配列自体に保持されます。

`flat()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。しかし、その要素を平坦化するには配列でなければなりません。

## 例

### ネストされた配列の平坦化

```js
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### 平坦化と配列の穴

`flat()` メソッドは配列内の空要素を削除します。

```js
const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, ["a", , ["d", , "e"]]];
console.log(array2.flat()); // [ 1, 3, "a", ["d", empty, "e"] ]
console.log(array2.flat(2)); // [ 1, 3, "a", "d", "e"]
```

### 配列でないオブジェクトに対する flat() の呼び出し

`flat()` メソッドは `this` の `length` プロパティを読み込み、キーが `length` より小さい非負の整数である各プロパティにアクセスします。要素が配列でない場合は、結果に直接追加されます。要素が配列の場合は、引数 `depth` に従って平坦化されます。

```js
const arrayLike = {
  length: 3,
  0: [1, 2],
  // 配列風オブジェクトは平坦化されない
  1: { length: 2, 0: 3, 1: 4 },
  2: 5,
  3: 3, // length が 3 なので flat() から無視される
};
console.log(Array.prototype.flat.call(arrayLike));
// [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.flat` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
