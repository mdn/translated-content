---
title: Array.prototype.toSorted()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSorted
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`toSorted()`** は {{jsxref("Array")}} インスタンスのメソッドで、 {{jsxref("Array/sort", "sort()")}} メソッドに対応する[コピー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#コピーメソッドと変更メソッド)メソッドです。これは、要素を昇順にソートした新しい配列を返します。

## 構文

```js-nolint
toSorted()
toSorted(compareFn)
```

### 引数

- `compareFn` {{optional_inline}}

  - : ソート順を定義する関数を指定します。省略した場合は、配列の要素を文字列に変換し、 Unicode コードポイントの値に従って並べ替えます。

    - `a`
      - : 比較する最初の要素です。
    - `b`
      - : 比較する 2 番目の要素です。

### 返値

要素を昇順にソートした新しい配列です。

## 解説

`compareFn` 引数の情報については {{jsxref("Array/sort", "sort()")}} を参照してください。

[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)が使用された場合、 `toSorted()` メソッドは空のスロットを `undefined` という値があるものとして反復処理します。

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
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
