---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

**`filter()`** は {{jsxref("Array")}} インスタンスのメソッドで、指定された配列の中から指定された関数で実装されているテストに合格した要素だけを抽出した[シャローコピー](/ja/docs/Glossary/Shallow_copy)を作成します。

{{EmbedInteractiveExample("pages/js/array-filter.html", "shorter")}}

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

`filter()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。指定された `callbackFn` 関数を配列の各要素に対して一度ずつ呼び出し、 `callbackFn` が[真値](/ja/docs/Glossary/Truthy)を返したすべての要素からなる新しい配列を生成します。 `callbackFn` は値が代入されている配列の添字に対してのみ呼び出されます。

`callbackFn` は値が割り当てられている配列インデックスに対してのみ呼び出されます。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)の空のスロットに対しては呼び出されません。

`filter()` メソッドは[コピーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#コピーメソッドと変更メソッド)です。これは `this` を変更するのではなく、元の配列と同じ要素を格納した[シャローコピー](/ja/docs/Glossary/Shallow_copy)を返します。しかし、 `callbackFn` として指定された関数は配列を変更することができます。ただし、配列の長さは `callbackFn` を最初に呼び出す前に保存されることに注意してください。したがって、

- `callbackFn` は、 `every()` の呼び出しを始めたときの配列の長さを超えて追加された要素にはアクセスしません。
- 既に処理したインデックスを変更しても、 `callbackFn` が再度呼び出されることはありません。
- まだ処理していない既存の配列要素が `callbackFn` によって変更された場合、`callbackFn` に渡される値はその要素が取得された時点での値になります。[削除](/ja/docs/Web/JavaScript/Reference/Operators/delete)された要素は処理されません。

> [!WARNING]
> 上記のように進行中の配列に対して変更を行うと、理解しにくいコードになることが多いので、（特別な場合を除いて）避けるのが一般的です。

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

console.log("Number of Invalid Entries =", invalidEntries);
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

### 初期の配列への影響（変更、追加、削除）

以下の例は、配列が変更された時の `filter` の動作をテストするものです。

```js
// それぞれの単語を変更
let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += " extra";
  return word.length < 6;
});

console.log(modifiedWords);
// 6 文字未満の語は 3 つあるが、変更されているので 1 つしか返されない
// ["spray"]

// new の単語を追加
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const appendedWords = words.filter((word, index, arr) => {
  arr.push("new");
  return word.length < 6;
});

console.log(appendedWords);
// `words` 自体には 6 文字未満の単語がたくさん増えたが、条件に合うのは 3 つだけ
// ["spray" ,"limit" ,"elite"]

// 単語の削除
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deleteWords = words.filter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
});

console.log(deleteWords);
// 'elite' はフィルターが取得する前に 'words' から取り出されているので、取得されていないことに注意
// ["spray" ,"limit"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.filter` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)ガイド
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
