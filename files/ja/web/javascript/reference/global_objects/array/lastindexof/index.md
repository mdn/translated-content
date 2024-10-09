---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
l10n:
  sourceCommit: 85d7482697cc2bf407c58e809a2a754180d6714c
---

{{JSRef}}

**`lastIndexOf()`** は {{jsxref("Array")}} インスタンスのメソッドで、配列中で与えられた要素が見つかった最後の添字を返します。もし存在しなければ -1 を返します。配列は `fromIndex` から逆向きに検索されます。

{{EmbedInteractiveExample("pages/js/array-lastindexof.html")}}

## 構文

```js-nolint
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```

### 引数

- `searchElement`
  - : 検索する配列要素です。
- `fromIndex` {{optional_inline}}
  - : 検索し始める位置のゼロから始まるインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。
    - インデックスが負の場合、配列の末尾からさかのぼって数えます。 `-array.length <= fromIndex < 0` の場合、 `fromIndex + array.length` が使用されます。
    - `fromIndex < -array.length` の場合、配列は検索が行われず、 `-1` が返されます。概念的には、配列の先頭より前の存在しない位置から始めて、そこから逆方向に進むと考えることができます。途中には配列要素はないので、 `searchElement` は決して見つかりません。
    - `fromIndex >= array.length` または `fromIndex` が省略された場合、 `array.length - 1` が使用され、配列全体が検索されます。概念的には、配列の末尾の先にある存在しない位置から始めて、そこから後方に進むと考えることができます。最終的に配列の本当の末尾に到達し、この点から実在する配列要素を逆探索し始めます。

### 返値

配列内の最後の `searchElement` のインデックスです。見つからなかった場合は `-1` です。

## 解説

`lastIndexOf()` メソッドは `searchElement` と配列の要素を[厳密な等価性](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)（`===` 演算子を使用するアルゴリズムと同じ）を使用して比較します。 [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN) 値が等しいものとして比較されることはないので、 `searchElement` が `NaN` の場合、`lastIndexOf()` は常に `-1` を返します。

`lastIndexOf()` メソッドは[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)の空スロットをスキップします。

`lastIndexOf()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### lastIndexOf() の使用

`lastIndexOf()` を使って配列中のある値の位置を探す例を以下に示します。

```js
const numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2); // 3
numbers.lastIndexOf(7); // -1
numbers.lastIndexOf(2, 3); // 3
numbers.lastIndexOf(2, 2); // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3
```

`lastIndexOf()` を使用して `NaN` を検索することはできません。

```js
const array = [NaN];
array.lastIndexOf(NaN); // -1
```

### ある要素の存在をすべて見つける

以下の例は `lastIndexOf` を使って、与えられた配列中のある値の添字すべてを探しています。{{jsxref("Array/push", "push")}} を使って、値が見つかる度に別の配列にその添字を追加しています。

```js
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.lastIndexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
}

console.log(indices);
// [4, 2, 0]
```

ここで `idx == 0` の場合を分けて扱わないといけないことに注意してください。
なぜなら、もし検索する値が配列の最初の要素にあると、その値は `fromIndex` パラメーターにかかわらずいつもヒットしてしまうのです。
これは {{jsxref("Array/indexOf", "indexOf()")}} メソッドとは異なります。

### 疎配列に対する lastIndexOf() の使用

疎配列の空のスロットを検索するために `lastIndexOf()` を使用することはできません。

```js
console.log([1, , 3].lastIndexOf(undefined)); // -1
```

### 配列以外のオブジェクトに対する lastIndexOf() の呼び出し

`lastIndexOf()` メソッドは `this` の `length` プロパティを読み込み、次にキーが `length` より小さい非負の整数である各プロパティにアクセスします。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 2,
  3: 5, // length が 3 なので lastIndexOf() からは無視される
};
console.log(Array.prototype.lastIndexOf.call(arrayLike, 2));
// 2
console.log(Array.prototype.lastIndexOf.call(arrayLike, 5));
// -1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.lastIndexOf` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
