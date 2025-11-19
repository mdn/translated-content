---
title: Array.prototype.filter()
short-title: filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`filter()`** は {{jsxref("Array")}} インスタンスのメソッドで、指定された配列の中から指定された関数で実装されているテストに合格した要素だけを抽出した[シャローコピー](/ja/docs/Glossary/Shallow_copy)を作成します。

{{InteractiveExample("JavaScript デモ: Array.prototype.filter()", "shorter")}}

```js interactive-example
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// 予想される結果: Array ["exuberant", "destruction", "present"]
```

## 構文

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 配列のそれぞれの要素に対して実行する関数です。この関数は、配列の要素を保持する場合は[真値](/ja/docs/Glossary/Truthy)、保持しない場合は[偽値](/ja/docs/Glossary/Falsy)を返します。この関数は以下の引数で呼び出されます。
    - `element`
      - : 配列内で処理中の現在の要素です。
    - `index`
      - : 配列内で処理中の現在の要素のインデックスです。
    - `array`
      - : `filter()` が呼び出された配列です。

- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行する際に `this` として使用される値。[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)を参照してください。

### 返値

指定された配列の一部を、指定された関数で実装されたテストに合格した要素だけに絞り込んで[シャローコピー](/ja/docs/Glossary/Shallow_copy)したものです。テストに合格した要素がない場合は、空の配列が返されます。

## 解説

`filter()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。指定された `callbackFn` 関数を配列の各要素に対して一度ずつ呼び出し、 `callbackFn` が[真値](/ja/docs/Glossary/Truthy)を返したすべての要素からなる新しい配列を生成します。 `callbackFn` テストに合格しなかった配列要素は、新しい配列には含まれません。これらのメソッドが一般的にどのように動作するのかについての詳細は、[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)の節をご覧ください。

`callbackFn` は値が割り当てられている配列インデックスに対してのみ呼び出されます。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)の空のスロットに対しては呼び出されません。

`filter()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。このメソッドは `this` の値に `length` プロパティと整数のキーを持ったプロパティがあることだけを求めます。

## 例

### 小さい値をすべて取り除く

次の例では、`filter()` を使って 10 未満の値を持つ要素をすべて取り除いた配列を生成します。

```js
function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

### 配列内の素数をすべて検索する

以下の例は配列内のすべての素数を返します。

```js
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n % 2 === 0) {
    return n === 2;
  }
  for (let factor = 3; factor * factor <= n; factor += 2) {
    if (n % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
```

> [!NOTE]
> `isPrime()` の実装は、説明のみを目的としています。実際のアプリケーションでは、繰り返し計算を避けるために、[エラトステネスの篩](https://ja.wikipedia.org/wiki/エラトステネスの篩)などの、高度に最適化されたアルゴリズムを使用することをお勧めします。

### JSON の不正な内容を取り除く

次の例では、`filter()` を使って `id` の数値が 0 以外の要素だけに絞った JSON を生成します。

```js
const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

let invalidEntries = 0;

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

const arrByID = arr.filter(filterByID);

console.log("絞り込みされた配列\n", arrByID);
// 絞り込みされた配列
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("無効な項目の数 =", invalidEntries);
// 無効な項目の数 = 5
```

### 配列内の検索

次の例では `filter()` を使って検索条件で配列の絞り込みをしています。

```js
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * 検索条件（クエリー）に基づいて配列のアイテムをフィルターする
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
```

### callbackFn の第 3 引数の使用

`array` 引数は、配列の別の要素にアクセスしたい場合、特に、その配列を参照する既存の変数がない場合に便利です。次の例では、まず `map()` を使用してそれぞれの名前から数値 ID を抽出し、次に `filter()` を使用して、その数値が隣の数値よりも大きいものを選択しています。

```js
const names = ["JC63", "Bob132", "Ursula89", "Ben96"];
const greatIDs = names
  .map((name) => parseInt(name.match(/\d+/)[0], 10))
  .filter((id, idx, arr) => {
    // arr 引数がない場合、変数に保存せずに中間配列に
    // 簡単にアクセスする方法はありません。
    if (idx > 0 && id <= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && id <= arr[idx + 1]) return false;
    return true;
  });
console.log(greatIDs); // [132, 96]
```

`array` 引数は、構築中の配列ではありません。コールバック関数から構築中の配列にアクセスする方法はありません。

### 疎配列に対する filter() の使用

`filter()` は空のスロットをスキップします。

```js
console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]
```

### 配列でないオブジェクトに対する filter() の呼び出し

`filter()` メソッドは `this` の `length` プロパティを読み取り、 `length` 未満の非負の整数のキーを持つすべてのプロパティにアクセスします。

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "a", // length が 3 であるため filter() は無視する
};
console.log(Array.prototype.filter.call(arrayLike, (x) => x <= "b"));
// [ 'a', 'b' ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.filter` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims による `Array.prototype.filter` のポリフィル](https://www.npmjs.com/package/array.prototype.filter)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)ガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
