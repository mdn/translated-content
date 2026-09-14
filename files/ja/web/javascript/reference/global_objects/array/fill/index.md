---
title: Array.prototype.fill()
short-title: fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`fill()`** は {{jsxref("Array")}} インスタンスのメソッドで、インデックスの範囲内にある配列のすべての要素を一定の値に変更します。これは変更した配列を返します。

{{InteractiveExample("JavaScript デモ: Array.prototype.fill()")}}

```js interactive-example
const array = [1, 2, 3, 4];

// 0 で位置 2 から位置 4 までを埋める
console.log(array.fill(0, 2, 4));
// 予想される結果: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array.fill(5, 1));
// 予想される結果: Array [1, 5, 5, 5]

console.log(array.fill(6));
// 予想される結果: Array [6, 6, 6, 6]
```

## 構文

```js-nolint
fill(value)
fill(value, start)
fill(value, start, end)
```

### 引数

- `value`
  - : 配列を埋める値。もし `value` がオブジェクトであれば、配列のそれぞれの要素はそのオブジェクトを参照します。
- `start` {{optional_inline}}
  - : 埋め始める位置のゼロから始まるインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。
    - インデックスが負の場合、配列の末尾からさかのぼって数えます。 `-array.length <= start < 0` の場合、 `start + array.length` が使用されます。
    - `start < -array.length` または `start` が省略された場合は `0` が使用されます。
    - `start >= array.length` の場合、埋められるインデックスはありません。
- `end` {{optional_inline}}
  - : 埋め終える位置のゼロから始まるインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。 `fill()` は `end` を含まず、その直前までを埋めます。
    - インデックスが負の場合、配列の末尾からさかのぼって数えます。 `end < 0` の場合、 `end + array.length` が使用されます。
    - `end < -array.length` の場合は `0` が使用されます。
    - `end >= array.length` または `end` が省略されているか `undefined` の場合、`array.length` が使用され、末尾までのすべてのインデックスが埋められます。
    - `end` が `start` が示す位置よりも前またはその位置であることを意味する場合、何も埋められません。

### 返値

`value` で埋められて変更された配列です。

## 解説

`fill()` メソッドは[変更メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#コピーメソッドと変更メソッド)です。これは `this` の長さは変更しませんが、 `this` のコンテンツは変更します。

`fill()` メソッドは[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)の空のスロットを、 `value` で埋めます。

`fill()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。このメソッドは `this` の値に `length` プロパティと整数のキーを持ったプロパティがあることだけを求めます。文字列も配列風のものですが、文字列は不変なので、このメソッドを適用するのは適していません。

> [!NOTE]
> `Array.prototype.fill()` を空の配列に対して使用すると、配列に変更するものがないので何も変更されません。
> 配列を宣言する際に `Array.prototype.fill()` を使用する場合は、スロットを配列に割り当てるようにしてください。
> [例はこちら](#fill_を使用して空の配列を生成)。

## 例

### fill の使用

```js
console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
console.log(Array(3).fill(4)); // [4, 4, 4]

// 配列の各スロットから参照される、単一のオブジェクト。
const arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

### fill() を使用してすべて 1 の行列を作成

この例では、 Octave や MATLAB の `ones()` 関数のように、すべて 1 の行列を作成する方法を示しています。

```js
const arr = new Array(3);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(4).fill(1); // 大きさが 4、内容が 1 の配列を作成
}
arr[0][0] = 10;
console.log(arr[0][0]); // 10
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1
```

### fill() を使用して空の配列を生成

この例では、配列に値を入力し、すべての要素に詳細な値を設定する方法を示しています。
`end` 引数を指定する必要はありません。

```js
const tempGirls = Array(5).fill("girl", 0);
```

配列は最初はインデックスが割り当てられていない[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)であることに注意してください。 `fill()` でこの配列を埋めることができます。

### 配列でないオブジェクトに対する fill() の呼び出し

`fill()` メソッドは `this` の `length` プロパティを読み取り、 `start` から `end` までの各整数キーのプロパティの値を設定します。

```js
const arrayLike = { length: 2 };
console.log(Array.prototype.fill.call(arrayLike, 1));
// { '0': 1, '1': 1, length: 2 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.fill` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)ガイド
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
