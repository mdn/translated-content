---
title: Array.prototype.toSpliced()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSpliced
l10n:
  sourceCommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{JSRef}}

**`toSpliced()`** は {{jsxref("Array")}} インスタンスのメソッドで、 {{jsxref("Array/splice", "splice()")}} メソッドに対応する[コピー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#コピーメソッドと変更メソッド)メソッドです。これは、指定された位置の要素を除去したり置き換えたりした新しい配列を返します。

## 構文

```js-nolint
toSpliced(start)
toSpliced(start, deleteCount)
toSpliced(start, deleteCount, item1)
toSpliced(start, deleteCount, item1, item2)
toSpliced(start, deleteCount, item1, item2, /* …, */ itemN)
```

### 引数

- `start`

  - : 配列の変更を始める位置のゼロから始まるインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。
    - 負のインデックスは配列の末尾から数えます。 `start < 0` の場合は `start + array.length` を使用します。
    - `start < -array.length` または `start` が省略された場合は `0` が使用されます。
    - `start >= array.length` である場合、削除される要素はありませんが、このメソッドは追加関数として動作し、提供されただけの要素を追加します。

- `deleteCount` {{optional_inline}}

  - : 整数で、配列内で `start` から削除する要素の数を示します。

    `deleteCount` を省略した場合、またはその値が `start` で指定した位置以降の要素数以上の場合、 `start` から配列の末尾までのすべての要素が削除されます。ただし、もし `itemN` 引数を渡したい場合は、 `Infinity` を `deleteCount` に渡して `start` 以降の要素をすべて削除してください。明示的に `undefined` を指定すると `0` に[変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)されてしまうからです。

    `deleteCount` が `0` または負の場合、要素は除去されません。
    この場合、少なくとも 1 つの新しい要素を指定する必要があります（下記参照）。

- `item1`, …, `itemN` {{optional_inline}}

  - : 配列に追加する要素を `start` から始めます。

    要素を指定しない場合、 `toSpliced()` は配列から要素を取り除くだけです。

### 返値

`start`, `item1`, `item2`, …, `itemN` より前のすべての要素と、 `start + deleteCount` より後のすべての要素からなる新しい配列です。

## 解説

`toSpliced()` メソッドは `splice()` と同様に、一度に複数のことを行います。指定されたインデックスの位置から、指定された数の要素を配列から除去し、同じインデックスの位置に指定された要素を挿入します。しかし、元の配列を変更するのではなく、新しい配列を返します。したがって、削除された要素はこのメソッドからは返されません。

`toSpliced()` メソッドは決して[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)を生成しません。疎配列の場合、空のスロットは新しい配列の `undefined` に置き換わります。

`toSpliced()` メソッドは[汎用](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。 `this` の値が `length` プロパティを持っており、整数のキーのプロパティがあることのみを期待します。

## 例

### 要素の削除、追加、置き換え

`toSpliced()` を使用すると、配列の要素を削除、追加、置き換えることができ、`slice()` や `concat()` を使用するよりも効率的に新しい配列を作成することができます。

```js
const months = ["Jan", "Mar", "Apr", "May"];

// インデックス 1 の要素の挿入
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// インデックス 2 から始まる 2 つの要素を削除
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// インデックス 1 の要素を 2 つの新しい要素で置き換え
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// 元配列は変更しない
console.log(months); // ["Jan", "Mar", "Apr", "May"]
```

### 疎配列に対する toSpliced() の使用

`toSpliced()` メソッドは常に密な配列を作成します。

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.toSpliced(1, 2)); // [1, 4, undefined, 6]
```

### 配列以外のオブジェクトに対する toSpliced() の呼び出し

`toSpliced()` メソッドは `this` の `length` プロパティを読み取ります。そして、必要な整数キーのプロパティを読み込み、新しい配列に書き込みます。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.toSpliced.call(arrayLike, 0, 1, 2, 3));
// [2, 3, undefined, 4]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.toSpliced` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#change-array-by-copy)
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.with()")}}
