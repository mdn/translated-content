---
title: Array.prototype.with()
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Array/with
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`with()`** は {{jsxref("Array")}} インスタンスのメソッドで、[ブラケット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors#ブラケット記法)に対応する[コピー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#コピーメソッドと変更メソッド)メソッドです。これは、指定された位置の要素を指定された値で置き換えた新しい配列を返します。

## 構文

```js-nolint
arrayInstance.with(index, value)
```

### 引数

- `index`
  - : 配列を変更するゼロ基点のインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)。
    - インデックスが負の場合は、配列の末尾から逆に数えます。 `-array.length <= index < 0` の場合、 `index + array.length` が使用されます。
    - 正規化後のインデックスが範囲を超えていた場合は、 {{jsxref("RangeError")}} 例外が発生します。
- `value`
  - : 指定された位置に割り当てる値です。

### 返値

インデックス `index` の要素を `value` に置き換えた新しい配列です。

### 例外

- {{jsxref("RangeError")}}
  - : `index >= array.length` または `index < -array.length` の場合に発生します。

## 解説

`with()` メソッドは、配列の指定された位置の値を変更し、指定されたインデックスの要素を指定された値で置き換えた新しい配列を返します。元の配列は変更しません。これにより、配列メソッドを連鎖させながら操作を行うことができます。

`with()` と {{jsxref("Array/at", "at()")}} を組み合わせることで、負のインデックスを用いた配列の書き込みと読み込み（それぞれ）ができます。

`with()` メソッドは決して[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)を生成しません。疎配列の場合、空のスロットは新しい配列の `undefined` に置き換わります。

`with()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。このメソッドは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### 単一の要素を変更した新しい配列を作成

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
```

### 配列メソッドの連鎖

`with()` メソッドを使用すると、配列の単一の要素を更新してから、他の配列メソッドを適用することができます。

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6).map((x) => x ** 2)); // [1, 4, 36, 16, 25]
```

### 疎配列に対する with() の使用

`with()` メソッドは常に密配列を生成します。

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.with(0, 2)); // [2, undefined, 3, 4, undefined, 6]
```

### 配列以外のオブジェクトに対する with() の呼び出し

`with()` メソッドは新しい配列を生成して返します。このメソッドは `this` の `length` プロパティを読み込み、次にキーが `length` より小さい非負の整数である各プロパティにアクセスします。`this` の各プロパティにアクセスすると、プロパティのキーに等しいインデックスの配列要素がプロパティの値に設定されます。最後に、配列の `index` の値が `value` に設定されます。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
  3: 3, // length が 3 なので with() からは無視される
};
console.log(Array.prototype.with.call(arrayLike, 0, 1));
// [ 1, undefined, 4 ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.with` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#change-array-by-copy)
- [es-shims による `Array.prototype.with` のポリフィル](https://www.npmjs.com/package/array.prototype.with)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.at()")}}
- {{jsxref("TypedArray.prototype.with()")}}
