---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`entries()`** は {{jsxref("Array")}} インスタンスのメソッドで、配列内の各要素に対するキー/値のペアを含む新しい[配列イテレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)オブジェクトを返します。

{{EmbedInteractiveExample("pages/js/array-entries.html")}}

## 構文

```js-nolint
entries()
```

### 引数

なし。

### 返値

新しい[反復可能イテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)です。

## 解説

[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)で使用された場合、 `entries()` メソッドは空のスロットを `undefined` の値が設定されているかのように反復処理します。

`entries()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。このメソッドは `this` の値に `length` プロパティと整数のキーを持ったプロパティがあることだけを求めます。

## 例

### インデックスと要素の反復処理

```js
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
```

### for...of ループの使用

```js
const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']
```

### 疎配列を反復処理

`entries()` は空のスロットを `undefined` であるかのように処理します。

```js
for (const element of [, "a"].entries()) {
  console.log(element);
}
// [0, undefined]
// [1, 'a']
```

### 配列でないオブジェクトに対する entries() の呼び出し

`entries()` メソッドは `this` の `length` プロパティを読み込み、そのキーが `length` よりも小さい非負の整数である各プロパティにアクセスします。

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "d", // length が 3 なので entries() からは無視される
};
for (const entry of Array.prototype.entries.call(arrayLike)) {
  console.log(entry);
}
// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.entries` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)ガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.values()")}}
- [`Array.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.entries()")}}
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
