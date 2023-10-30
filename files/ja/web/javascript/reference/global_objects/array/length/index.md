---
title: Array.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/Array/length
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`length`** は `Array` 型のインスタンスであるオブジェクトのプロパティで、配列の要素の数を設定または取得します。値は符号なし 32 ビット整数で、常に配列の最も大きなインデックスよりも数値的に大きくなります。

{{EmbedInteractiveExample("pages/js/array-length.html","shorter")}}

## 解説

`length` プロパティの値は正の符号を持つ整数で、2 の 32 乗 (2^32) 未満の値です。

```js
const listA = [1, 2, 3];
const listB = new Array(6);

console.log(listA.length);
// 3

console.log(listB.length);
// 6

listB.length = 4294967296; //2 の 32 乗 = 4294967296
// RangeError: Invalid array length

const listC = new Array(-100); // 負の符号
// RangeError: Invalid array length
```

`length` プロパティに値をセットすることで、いつでも配列を短縮することができます。`length` プロパティの値を現在より大きな値に変更すると、配列内の要素数も増加します。例えば `length` が現在 2 のところに 3 をセットすると、配列内の要素数は 3 になり、3 番目の要素は反復処理できない空のスロットになります。

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

ご覧の通り、`length` プロパティは必ずしも配列内で定義された値の数を示しているわけではありません。詳細は [`length` と数値プロパティとの関係](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#length_と数値プロパティとの関係)をご覧ください。

{{js_property_attributes(1, 0, 0)}}

- `Writable`: この属性が `false` に設定されている場合、プロパティの値を変更することはできません。
- `Configurable`: この属性が `false` に設定されている場合、プロパティの削除や属性 (`Writable`, `Configurable`, `Enumerable`) の変更の試みは失敗します。
- `Enumerable`: この属性が `true` に設定されている場合、プロパティは [for](/ja/docs/Web/JavaScript/Reference/Statements/for) や [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループ中で反復処理の対象にされます。

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
```

### 固定長の空の配列を作成

```js
const numbers = [];
numbers.length = 3;
console.log(numbers); // [empty x 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Array")}}
- [RangeError: invalid array length](/ja/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
