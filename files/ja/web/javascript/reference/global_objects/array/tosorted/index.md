---
title: Array.prototype.toSorted()
short-title: toSorted()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSorted
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`toSorted()`** は {{jsxref("Array")}} インスタンスのメソッドで、 {{jsxref("Array/sort", "sort()")}} メソッドに対応する[コピー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#コピーメソッドと変更メソッド)メソッドです。これは、要素を昇順にソートした新しい配列を返します。

## 構文

```js-nolint
toSorted()
toSorted(compareFn)
```

### 引数

- `compareFn` {{optional_inline}}
  - : 要素の順序を決定する関数。省略した場合、配列の要素は文字列に変換され、各文字の Unicode コードポイントの値に従ってソートされます。詳細については、{{jsxref("Array/sort", "sort()")}} を参照してください。

### 返値

要素を昇順にソートした新しい配列です。

## 解説

`compareFn` 引数の情報については {{jsxref("Array/sort", "sort()")}} を参照してください。

[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)が使用された場合、 `toSorted()` メソッドは空のスロットを `undefined` という値があるものとして反復処理します。

`toSorted()` メソッドは[汎用](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。 `this` の値が `length` プロパティを持っており、整数のキーのプロパティがあることのみを期待します。

## 例

### 配列のソート

```js
const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]
```

他の利用例は、 {{jsxref("Array/sort", "sort()")}} を参照してください。

### 疎配列における toSorted() の使用

空のスロットは値が `undefined` であるかのようにソートされます。これらは常に配列の末尾にソートされ、 `compareFn` は呼び出されません。

```js
console.log(["a", "c", , "b"].toSorted()); // ['a', 'b', 'c', undefined]
console.log([, undefined, "a", "b"].toSorted()); // ["a", "b", undefined, undefined]
```

### 配列以外のオブジェクトに対する toSorted() の呼び出し

`toSorted()` メソッドは `this` の `length` プロパティを読み取ります。そして、`length - 1` から `0` までの整数のキーを持つ各プロパティを降順に訪れ、現在のプロパティの値を配列の末尾に追加して返します。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
  3: 3, // length が 3 なので toSorted() からは無視される
};
console.log(Array.prototype.toSorted.call(arrayLike));
// [4, 5, undefined]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.toSorted` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#change-array-by-copy)
- [es-shims による `Array.prototype.toSorted` のポリフィル](https://www.npmjs.com/package/array.prototype.tosorted)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
