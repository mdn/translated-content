---
title: Array.prototype.unshift()
short-title: unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`unshift()`** は {{jsxref("Array")}} インスタンスのメソッドで、指定された要素を配列の先頭に追加し、新しい配列の長さを返します。

{{InteractiveExample("JavaScript デモ: Array.prototype.unshift()")}}

```js interactive-example
const array = [1, 2, 3];

console.log(array.unshift(4, 5));
// 予想される結果: 5

console.log(array);
// 予想される結果: Array [4, 5, 1, 2, 3]
```

## 構文

```js-nolint
unshift()
unshift(element1)
unshift(element1, element2)
unshift(element1, element2, /* …, */ elementN)
```

### 引数

- `element1`, …, `elementN`
  - : `arr` の先頭に追加する要素。

### 返値

メソッドを呼び出した後のオブジェクトの新しい {{jsxref("Array.length", "length")}} プロパティの値です。

## 解説

`unshift()` メソッドは、与えられた要素を配列風オブジェクトの一番最初に挿入します。

{{jsxref("Array.prototype.push()")}} は `unshift()` と似た動作をしますが、配列の末尾に対して行う点が異なります。

複数の要素が引数として渡された場合、引数として渡されたものと全く同じ順番で、オブジェクトの最初のチャンクに挿入されることに注意してください。したがって、 `unshift()` を `n` 個の引数で **1 回**呼び出すのと、**1 個**の引数で `n` 回（例えばループを使って）呼び出すのとでは同じ結果にはなりません。

例をご覧ください。

```js
let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6]; // 配列をリセット

arr.unshift(1);
arr.unshift(2);
arr.unshift(3);

console.log(arr);
// [3, 2, 1, 4, 5, 6]
```

`unshift()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。このメソッドは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。文字列も配列風ですが、文字列は不変なので、このメソッドを適用するのには適していません。

## 例

### unshift の使用

```js
const arr = [1, 2];

arr.unshift(0); // 呼び出しの返値は 3、新しい配列の長さ
// arr is [0, 1, 2]

arr.unshift(-2, -1); // 新しい配列の長さは 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]); // 新しい配列の長さは 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]); // 新しい配列の長さは 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
```

### 配列以外のオブジェクトに対する unshift() の呼び出し

`unshift()` メソッドは `this` の `length` プロパティを読み込みます。 `0` から `length - 1` までの範囲にあるすべてのインデックスを、引数の数だけ右にシフトします（この数だけ値を増加します）。次に、 `0` から始めるには、各インデックスを `unshift()` に渡した引数で設定します。最後に、`length` を前回の長さに、前に追加した要素の数を加えた値に設定します。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
Array.prototype.unshift.call(arrayLike, 1, 2);
console.log(arrayLike);
// { '0': 1, '1': 2, '4': 4, length: 5, unrelated: 'foo' }

const plainObj = {};
// length プロパティがないため、 length は 0
Array.prototype.unshift.call(plainObj, 1, 2);
console.log(plainObj);
// { '0': 1, '1': 2, length: 2 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.unshift` の修正を含むポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims による `Array.prototype.unshift` のポリフィル](https://www.npmjs.com/package/array.prototype.unshift)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
