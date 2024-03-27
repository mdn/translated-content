---
title: Array.prototype.toReversed()
slug: Web/JavaScript/Reference/Global_Objects/Array/toReversed
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`toReversed()`** は {{jsxref("Array")}} インスタンスのメソッドで、 {{jsxref("Array/reverse", "reverse()")}} メソッドに対応する[コピー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#コピーメソッドと変更メソッド)メソッドです。これは、要素を逆順に並べた新しい配列を返します。

## 構文

```js-nolint
toReversed()
```

### 引数

なし。

### 返値

要素を逆順に格納した新しい配列です。

## 解説

`toReversed()` メソッドは、呼び出した配列オブジェクトの要素を逆順に並べ替えて新しい配列を返します。

[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)に対して使用した場合、 `toReversed()` メソッドは空のスロットを `undefined` という値があるものとして反復処理します。

`toReversed()` メソッドは[汎用](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。 `this` の値が `length` プロパティを持っており、整数のキーのプロパティがあることのみを期待します。

## 例

### 配列内の要素を反転

次の例では、 3 つの要素を格納した配列 `items` を作成し、次に `items` の逆の配列を新しく作成します。このとき `items` 配列は変更されません。

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
```

### 疎配列に対する toReversed() の使用

`toReversed()` の返値は決して疎配列にはなりません。空のスロットは返す配列の `undefined` になります。

```js
console.log([1, , 3].toReversed()); // [3, undefined, 1]
console.log([1, , 3, 4].toReversed()); // [4, 3, undefined, 1]
```

### 配列以外のオブジェクトに対する toReversed() の呼び出し

`toReversed()` メソッドは `this` の `length` プロパティを読み取ります。そして、`length - 1` から `0` までの整数のキーを持つ各プロパティを降順に訪れ、現在のプロパティの値を配列の末尾に追加して返します。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.toReversed.call(arrayLike));
// [4, undefined, undefined]
// '0' と '1' インデックスは存在しませんので、未定義となります。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.toReversed` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#change-array-by-copy)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
