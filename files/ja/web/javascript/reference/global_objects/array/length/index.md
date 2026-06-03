---
title: "Array: length"
short-title: length
slug: Web/JavaScript/Reference/Global_Objects/Array/length
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`length`** は {{jsxref("Array")}} インスタンスのデータプロパティで、配列の要素の数を表します。値は符号なし 32 ビット整数で、常に配列の最も大きなインデックスよりも数値的に大きくなります。

{{InteractiveExample("JavaScript デモ: Array: length", "shorter")}}

```js interactive-example
const clothing = ["shoes", "shirts", "socks", "sweaters"];

console.log(clothing.length);
// 予想される結果: 4
```

## 値

非負の整数で、 2<sup>32</sup> 未満です。

{{js_property_attributes(1, 0, 0)}}

## 解説

`length` プロパティの値は非負の整数で、 2<sup>32</sup> 未満の値です。

```js
const listA = [1, 2, 3];
const listB = new Array(6);

console.log(listA.length);
// 3

console.log(listB.length);
// 6

listB.length = 2 ** 32; // 4294967296
// RangeError: Invalid array length

const listC = new Array(-100); // 負の数は許されない
// RangeError: Invalid array length
```

配列オブジェクトは `length` プロパティを監視し、自動的に `length` 値を配列のコンテンツと同期させます。これは、次のことを意味します。

- 新しい `length` を超えた要素は削除されます。
- 配列のインデックス（2<sup>32</sup> より小さい非負の整数）を現在の `length` よりも大きい値に設定するには、配列を拡張します。 `length` プロパティは新しい最も大きいインデックスを反映するように増加します。
- `length` に無効な値（例えば、負の数や非整数）を設定すると、 `RangeError` 例外が発生します。

`length` に現在の長さよりも大きな値を設定すると、配列は実際の値が `undefined` ではなく、[空のスロット](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)を追加することで拡張されます。空のスロットは配列メソッドと特別な対話をします。[配列メソッドと空のスロット](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#配列メソッドと空のスロット)を参照してください。

```js
const arr = [1, 2];
console.log(arr);
// [ 1, 2 ]

arr.length = 5; // 現在 2 の配列の長さを 5 に設定
console.log(arr);
// [ 1, 2, <3 つの空アイテム> ]

arr.forEach((element) => console.log(element));
// 1
// 2
```

詳細は [`length` と数値プロパティとの関係](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#length_と数値プロパティとの関係)をご覧ください。

## 例

### 配列を反復処理する

以下の例では、配列 `numbers` がいくつの要素を持っているかを知るために `length` プロパティを見ることで、配列を反復処理します。その際それぞれの値は 2 倍されます。

```js
const numbers = [1, 2, 3, 4, 5];
const length = numbers.length;
for (let i = 0; i < length; i++) {
  numbers[i] *= 2;
}
// numbers は [2, 4, 6, 8, 10] となった
```

### 配列の短縮

以下の例は配列 `numbers` の要素数が 3 より大きいかどうかを調べて、大きいならその `length` を 3 としています。

```js
const numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
  numbers.length = 3;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3
console.log(numbers[3]); // undefined; the extra elements are deleted
```

### 固定長の空の配列を作成

`length` に現在の長さ以上の値を設定すると、[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)を作成します。

```js
const numbers = [];
numbers.length = 3;
console.log(numbers); // [empty x 3]
```

### length の書き込み不可の配列

`length` プロパティは、現在の長さを超えて要素が追加されると、配列によって自動的に更新されます。もし `length` プロパティを書き込み不可にすると、配列はそれを更新できなくなります。これは[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)ではエラーが発生します。

```js
"use strict";

const numbers = [1, 2, 3, 4, 5];
Object.defineProperty(numbers, "length", { writable: false });
numbers[5] = 6; // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
numbers.push(5); // // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)ガイド
- {{jsxref("Array")}}
- [`TypedArray.prototype.length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length)
- [`String`: `length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [RangeError: invalid array length](/ja/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
