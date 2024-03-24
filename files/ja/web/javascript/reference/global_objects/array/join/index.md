---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

**`join()`** は {{jsxref("Array")}} インスタンスのメソッドで、配列の全要素を順に連結した新しい文字列を返します。区切り文字はカンマ、または指定された文字列です。配列にアイテムが一つしかない場合は、区切り文字を使用せずにアイテムが返されます。

{{EmbedInteractiveExample("pages/js/array-join.html")}}

## 構文

```js-nolint
join()
join(separator)
```

### 引数

- `separator` {{optional_inline}}
  - : 配列の各要素を区切る文字列です。省略した場合、配列の要素はカンマ (",") で区切られます。

### 返値

配列の全要素が連結された文字列です。 `array.length` が `0` であった場合、空の文字列が返されます。

## 解説

配列のすべての要素を文字列に変換したものが、1 個の文字列に繋がれます。要素が `undefined` または `null` であった場合、 `"null"` や `"undefined"` ではなく空文字列に変換されます。

`join` メソッドは、内部的には [`Array.prototype.toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) によって引数なしでアクセスすることができます。配列インスタンスの `join` をオーバーライドすると、その `toString` の動作もオーバーライドされます。

`Array.prototype.join` は他の配列も含めて、再帰的にそれぞれの要素を文字列に変換します。 `Array.prototype.toString` が返す文字列（これは `join()` を呼び出すのと同じです）には区切り文字がないので、入れ子配列は平坦化されたように見えます。区切り文字を制御できるのは最初のレベルだけで、それ以上のレベルでは常に既定のカンマを使用します。

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9
```

配列が循環している（コンテナーそのものである要素を格納している）場合、ブラウザーは循環参照を無視することで無限再帰を避けます。

```js
const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.join(";")); // 1;3,,4;2
```

[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)で使用した場合、 `join()` メソッドは空のスロットを `undefined` という値があるかのように反復処理します。

`join()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### 3 通りの異なる形で配列をつなぐ

以下の例は、3 個の要素を持つ配列 `a` を作成し、デフォルト引数、カンマとスペース、そして「と」と空文字を使った 4 パターンの結合を行っています。

```js
const a = ["風", "水", "火"];
a.join(); // '風,水,火'
a.join(", "); // '風, 水, 火'
a.join(" + "); // '風 + 水 + 火'
a.join(""); // '風水火'
```

### 疎配列に対する join() の使用

`join()` は空のスロットを `undefined` と同じように扱い、余分な区切り文字を生成します。

```js
console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3'
```

### 配列以外のオブジェクトに対する join() の呼び出し

`join()` メソッドは `this` の `length` プロパティを読み込み、次にキーが `length` より小さい非負の整数である各プロパティにアクセスします。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignored by join() since length is 3
};
console.log(Array.prototype.join.call(arrayLike));
// 2,3,4
console.log(Array.prototype.join.call(arrayLike, "."));
// 2.3.4
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.join` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}
