---
title: Array.prototype.keys()
short-title: keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`keys()`** は {{jsxref("Array")}} インスタンスのメソッドで、配列内の各インデックスのキーを含む、新しい[配列イテレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)オブジェクトを返します。

{{InteractiveExample("JavaScript デモ: Array.prototype.keys()")}}

```js interactive-example
const array = ["a", "b", "c"];
const iterator = array.keys();

for (const key of iterator) {
  console.log(key);
}

// 予想される結果: 0
// 予想される結果: 1
// 予想される結果: 2
```

## 構文

```js-nolint
keys()
```

### 引数

なし。

### 返値

新しい[反復可能なイテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)です。

## 解説

[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)で使用した場合、 `keys()` メソッドは空のスロットを `undefined` という値があるかのように反復処理します。

`keys()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### 疎配列に対する keys() の呼び出し

配列に実際に存在するキーだけを処理する {{jsxref("Object.keys()")}} とは異なり、 `keys()` イテレーターは見つからないプロパティを表す穴を無視しません。

```js
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]
```

### 配列以外のオブジェクトに対する keys() の呼び出し

`keys()`メソッドは `this` の `length` プロパティを読み込み、 0 から `length - 1` までのすべての整数インデックスを返します。実際にはインデックスアクセスは行われません。

```js
const arrayLike = {
  length: 3,
};
for (const entry of Array.prototype.keys.call(arrayLike)) {
  console.log(entry);
}
// 0
// 1
// 2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.keys` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims による `Array.prototype.keys` のポリフィル](https://www.npmjs.com/package/array.prototype.keys)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [`Array.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.keys()")}}
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
