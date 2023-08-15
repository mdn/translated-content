---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
l10n:
  sourceCommit: d0e961d9a7368356b5d26efaaa7191b4f56a425a
---

{{JSRef}}

**`filter()`** メソッドは、この配列の中から、提供された関数で実装されたテストに合格した要素のみを抽出した[シャローコピー](/ja/docs/Glossary/Shallow_copy)を作成します。

{{EmbedInteractiveExample("pages/js/array-filter.html","shorter")}}

## 構文

```js-nolint
// アロー関数
filter((element) => { /* … */ } )
filter((element, index) => { /* … */ } )
filter((element, index, array) => { /* … */ } )

// コールバック関数
filter(callbackFn)
filter(callbackFn, thisArg)

// インラインコールバック関数
filter(function(element) { /* … */ })
filter(function(element, index) { /* … */ })
filter(function(element, index, array){ /* … */ })
filter(function(element, index, array) { /* … */ }, thisArg)
```

### 引数

- `callbackFn`

  - : 配列の各要素に対して実行するテスト関数です。この関数が `true` を返した要素は残され、`false` を返した要素は取り除かれます。

    この関数は以下の引数と共に呼び出されます。

    - `element`
      - : 配列内で処理中の現在の要素です。
    - `index`
      - : 配列内で処理中の現在の要素の位置です。
    - `array`
      - : `filter()` が呼び出された配列です。

- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行するときに `this` として使用する値です。

### 返値

指定された配列の一部を、指定された関数で実装されたテストに合格した要素だけに絞り込んで[シャローコピー](/ja/docs/Glossary/Shallow_copy)したものです。テストに合格した要素がない場合は、空の配列が返されます。

## 解説

`filter()` は、与えられた `callbackFn` 関数を配列の各要素に対して一度ずつ呼び出し、`callbackFn` が [`true` に評価される値](/ja/docs/Glossary/Truthy)を返したすべての要素からなる新しい配列を生成します。 `callbackFn` は値が代入されている配列の添字に対してのみ呼び出されます。つまり、すでに削除された添字や、まだ値が代入されていない添字に対しては呼び出されません。`callbackFn` によるテストに合格しなかった配列要素は単純にスキップされ、新しい配列には含まれないだけです。

`callbackFn` は 3 つの引数と共に呼び出されます。

1. 要素の値
2. 要素の添字
3. 走査されている配列オブジェクト

`filter` に引数 `thisArg` が与えられた場合、そのオブジェクトは `callbackFn` 関数内の `this` 値として使われます。そうでない場合、 `undefined` が `this` 値として使われます。`callbackFn` 関数内の最終的な `this` 値は[関数内の `this` を決定する一般的ルール](/ja/docs/Web/JavaScript/Reference/Operators/this)に従って決められます。

`filter()` は呼び出された配列を変化させません。

`filter()` によって処理される配列要素の範囲は、`callbackFn` が最初に呼び出される前に設定されます。既に訪問した位置にある要素や範囲外のインデックスに割り当てられた要素に対しては、 `callbackFn` は実行されません。既存の配列要素が削除された場合は、同様にそれらの要素は処理されません。

> **警告:** 前項で説明したような、参照中の配列の同時進行での変更は（特殊な場合を除いて）普通は避けるべきです。多くの場合、理解しにくいコードになります。

## 例

### 小さい値をすべて取り除く

次の例では、`filter()` を使って `10` 未満の値を持つ要素をすべて取り除いた配列を生成します。

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

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
```

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

console.log("Filtered Array\n", arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("Number of Invalid Entries = ", invalidEntries);
// Number of Invalid Entries = 5
```

### 配列内の検索

次の例では `filter()` を使って検索条件で配列の絞り込みをしています。

```js
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
```

### 初期の配列への影響（変更、追加、削除）

以下の例は、配列が変更された時の `filter` の動作をテストするものです。

```js
// Modifying each word
let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += " extra";
  return word.length < 6;
});

console.log(modifiedWords);
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]

// Appending new words
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const appendedWords = words.filter((word, index, arr) => {
  arr.push("new");
  return word.length < 6;
});

console.log(appendedWords);
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]

// Deleting words
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deleteWords = words.filter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
});

console.log(deleteWords);
// Notice 'elite' is not even obtained as it's been popped off 'words' before filter can even get there
// ["spray" ,"limit"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.filter` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.find()")}}
