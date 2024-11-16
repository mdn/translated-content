---
title: Array.prototype.splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`splice()`** は {{jsxref("Array")}} インスタンスのメソッドで、[その場 (in-place)](https://ja.wikipedia.org/wiki/In-place%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0) で既存の要素を取り除いたり、置き換えたり、新しい要素を追加したりすることで、配列の内容を変更します。

元の配列を変更せずに、ある部分を除去したり置き換えたりした新しい配列を作成するには {{jsxref("Array/toSpliced", "toSpliced()")}} を使用してください。配列を変更せずに配列の一部にアクセスするには {{jsxref("Array/slice", "slice()")}} を参照してください。

{{EmbedInteractiveExample("pages/js/array-splice.html")}}

## 構文

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

### 引数

- `start`

  - : 配列の変更を始める位置のゼロから始まるインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。
    - インデックスが負の場合、配列の末尾からさかのぼって数えます。 `start < 0` の場合、 `start + array.length` が使用されます。
    - `start < -array.length` の場合は `0` が使用されます。
    - `start >= array.length` の場合、要素は削除されませんが、メソッドは追加関数として動作し、指定された数だけ要素を追加します。
    - `start` が省略された場合（そして `splice()` が引数なしで呼び出された場合）、何も削除されません。これは `undefined` を渡すと `0` に変換されるのとは異なります。

- `deleteCount` {{optional_inline}}

  - : 配列の `start` の位置から取り除く古い要素の個数を示す整数です。

    `deleteCount` が省略された場合、または `deleteCount` の値が `start` で指定した位置より後の要素数以上の場合、 `start` から配列の末尾までのすべての要素が削除されます。ただし、任意の `itemN` 引数を渡したい場合は、 `start` より後の要素をすべて削除するために `deleteCount` として `Infinity` を渡す必要があります。明示的に `undefined` を渡すと、[変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)されて `0` になるからです。

    `deleteCount` が `0` または負の数の場合、どの要素も取り除かれません。この場合、少なくとも 1 つの新しい要素を指定する必要があります（以下参照）。

- `item1`, …, `itemN` {{optional_inline}}

  - : 配列に追加する要素で、`start` から始まります。

    要素を指定しなかった場合、`splice()` は単に配列から要素を取り除きます。

### 返値

取り除かれた要素を含む配列です。

要素が 1 つだけ取り除かれた場合は、要素数 1 の配列が返されます。

要素が取り除かれなかった場合、空の配列が返されます。

## 解説

`splice()` メソッドは[変更メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#コピーメソッドと変更メソッド)です。 `this` の内容を変更します。指定した挿入する要素数と除去される要素数が異なる場合、配列の `length` も変更されます。同時に、 [`[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) を使用して、返す新しい配列インスタンスを作成します。

削除された部分が[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)の場合、 `splice()` が返す配列も疎配列になり、対応するインデックスは空のスロットになります。

`splice()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。このメソッドは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。文字列も配列風ですが、文字列は不変なので、このメソッドを適用するのには適していません。

## 例

### 2 の位置の手前から 0 個の要素を削除して "drum" を挿入

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

// myFish は ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed は [] であり、どの要素も取り除かれていない
```

### 2 の位置の手前から 0 個の要素を削除して、"drum" と "guitar" を挿入

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum", "guitar");

// myFish は ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed は [] であり、どの要素も取り除かれていない
```

### 0（ゼロ）個の要素を 0 の位置から削除して、"angel" を挿入

`splice(0, 0, ...elements)` は、{{jsxref("Array/unshift", "unshift()")}} のように配列の先頭に要素を挿入します。

```js
const myFish = ["clown", "mandarin", "sturgeon"];
const removed = myFish.splice(0, 0, "angel");

// myFish は ["angel", "clown", "mandarin", "sturgeon"]
// アイテムは削除されない
```

### 0（ゼロ）個の要素を末尾の位置から削除して、"sturgeon" を挿入

`splice(array.length, 0, ...elements)` は、{{jsxref("Array/push", "push()")}} のように配列の末尾に要素を挿入します。

```js
const myFish = ["angel", "clown", "mandarin"];
const removed = myFish.splice(myFish.length, 0, "sturgeon");

// myFish は ["angel", "clown", "mandarin", "sturgeon"]
// アイテムは削除されない
```

### 3 の位置から 1 つ取り除く

```js
const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed = myFish.splice(3, 1);

// myFish は ["angel", "clown", "drum", "sturgeon"]
// removed は ["mandarin"]
```

### 2 の位置から 1 つ取り除いて "trumpet" を挿入

```js
const myFish = ["angel", "clown", "drum", "sturgeon"];
const removed = myFish.splice(2, 1, "trumpet");

// myFish は ["angel", "clown", "trumpet", "sturgeon"]
// removed は ["drum"]
```

### 0 の位置から 2 つ取り除き、そこへ "parrot" と "anemore" と "blue" を挿入

```js
const myFish = ["angel", "clown", "trumpet", "sturgeon"];
const removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish は ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed は ["angel", "clown"]
```

### 2 の位置から 2 つ取り除く

```js
const myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
const removed = myFish.splice(2, 2);

// myFish は ["parrot", "anemone", "sturgeon"]
// removed は ["blue", "trumpet"]
```

### -2 の位置から 1 つ取り除く

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(-2, 1);

// myFish は ["angel", "clown", "sturgeon"]
// removed は ["mandarin"]</pre>
```

### 2 の位置からすべての要素を取り除く

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2);

// myFish は ["angel", "clown"]
// removed は ["mandarin", "sturgeon"]
```

### 疎配列に対する splice() の使用

`splice()` メソッドは疎配列であることを維持します。

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.splice(1, 2)); // [empty, 3]
console.log(arr); // [1, 4, empty, 6]
```

### 配列以外のオブジェクトに対する splice() の呼び出し

`splice()` メソッドは `this` の `length` プロパティを読み込みます。そして、必要に応じて整数キーのプロパティと `length` プロパティを更新します。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.splice.call(arrayLike, 0, 1, 2, 3));
// [ 5 ]
console.log(arrayLike);
// { '0': 2, '1': 3, '3': 4, length: 4, unrelated: 'foo' }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.slice()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.unshift()")}}
