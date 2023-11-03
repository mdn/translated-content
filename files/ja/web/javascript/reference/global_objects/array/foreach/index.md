---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

**`forEach()`** メソッドは、与えられた関数を、配列の各要素に対して一度ずつ実行します。

{{EmbedInteractiveExample("pages/js/array-foreach.html")}}

## 構文

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 配列のそれぞれの要素に対して実行する関数。返値は破棄されます。この関数は以下の引数で呼び出されます。
    - `element`
      - : 現在処理中の配列の要素です。
    - `index`
      - : 現在処理中の配列の要素のインデックスです。
    - `array`
      - : `forEach()` が呼び出されている配列です。
- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行するときに `this` として使用する値です。[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)を参照してください。

### 返値

なし ({{jsxref("undefined")}})。

## 解説

`forEach()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。指定された関数 `callbackFn` を配列に含まれる各要素に対して一度ずつ、昇順で呼び出します。 {{jsxref("Array/map", "map()")}} と異なり、 `forEach()` は常に {{jsxref("undefined")}} を返し、連鎖させることはできません。典型的な使用する用途は、チェーンの終わりで副次効果を実行することです。

`callbackFn` は値が割り当てられている配列インデックスに対してのみ呼び出されます。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)で空のスロットに対しては呼び出されません。

`forEach()` メソッドは呼び出し元の配列を変更しませんが、 `callbackFn` に指定された関数は変更することがあります。ただし、配列の長さは `callbackFn` を最初に呼び出す前に保存されることに注意してください。したがって、

- `callbackFn` は `forEach()` の呼び出しを始めたときの配列の長さを超えて追加された要素にはアクセスしません。
- 既に訪問した位置を変更しても、 `callbackFn` が再度呼び出されることはありません。
- まだ訪問していない既存の配列要素が `callbackFn` によって変更された場合、 `callbackFn` に渡される値はその要素が取得される時点の値になります。[削除](/ja/docs/Web/JavaScript/Reference/Operators/delete)された要素は `undefined` であるかのように処理されます。

> **警告:** 前項で説明したような、参照中の配列の同時進行での変更は（特殊な場合を除いて）普通は避けるべきです。多くの場合、理解しにくいコードになります。

`された()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

例外を発生する以外の方法で、 `forEach()` ループを止めたり脱出したりする方法はありません。そのような動作を行う場合、 `forEach()` メソッドは適切な方法ではありません。

早期終了は [`for`](/ja/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of), [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) のようなループ文で行うことができます。また、{{jsxref("Array/every", "every()")}}, {{jsxref("Array/some", "some()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}} のような配列メソッドも、それ以上の反復処理が不要な場合は、直ちに反復処理を停止します。

`forEach()` は同期関数を期待します。プロミスを待ちません。`forEach` のコールバックとしてプロミス（または非同期関数）を使用する場合は、その意味合いを理解しておくようにしてください。

```js
const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);
// 本来期待される出力: 14
// 実際の出力: 0
```

一連の非同期処理を順次または並列に実行するには、[プロミスの合成](/ja/docs/Web/JavaScript/Guide/Using_promises#合成)を参照してください。

## 例

### 不連続な配列に対する forEach() の使用

```js-nolint
const arraySparse = [1, 3, /* 空 */, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });

// { element: 1 }
// { element: 3 }
// { element: 7 }
// { numCallbackRuns: 3 }
```

3 と 7 の間の値がないところで、コールバック関数が呼び出されなかったことが分かります。

### for ループから forEach への変換

```js
const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// after
items.forEach((item) => {
  copyItems.push(item);
});
```

### 配列の内容の出力

> **メモ:** 配列の内容をコンソールに表示するために、配列の整形済みのバージョンを表示する {{domxref("Console/table", "console.table()")}} を使用することができます。
>
> 以下の例では同じことを `forEach()` を使用して行う他の方法を説明しています。

次のコードは配列の要素ごとに、コンソールに 1 行ずつ要素の内容を出力します。

```js
const logArrayElements = (element, index /*, array */) => {
  console.log(`a[${index}] = ${element}`);
};

// 配列の 2 の位置には項目が存在しないため、
// スキップされることに注意してください
[2, 5, , 9].forEach(logArrayElements);
// 出力結果:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

### thisArg の使用

以下の（不自然な）例は、配列の中の各項目からオブジェクトのプロパティを更新します。

```js
class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }
  add(array) {
    // Only function expressions will have its own this binding
    array.forEach(function countEntry(entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  }
}

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3
console.log(obj.sum); // 16
```

`thisArg` 引数 (`this`) が `forEach()` に提供されているため、`callbackFn` の呼び出しのたびにこれが渡されます。コールバックはこれを `this` の値として使用します。

> **メモ:** コールバック関数の受け渡しに[アロー関数式](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)を使用した場合、`thisArg` 引数は、アロー関数が文法的に {{jsxref("Operators/this", "this")}} の値に結び付けられているため省略可能です。

### オブジェクトをコピーする関数

次のコードは与えられたオブジェクトのコピーを生成します。

オブジェクトのコピーを作成するには様々な方法があります。
以下のものは一つの方法で、`Array.prototype.forEach()` が `Object.*` ユーティリティ関数を使用して、どのように動作するかを説明しています。

```js
const copy = (obj) => {
  const copy = Object.create(Object.getPrototypeOf(obj));
  const propNames = Object.getOwnPropertyNames(obj);
  propNames.forEach((name) => {
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });
  return copy;
};

const obj1 = { a: 1, b: 2 };
const obj2 = copy(obj1); // obj2 looks like obj1 now
```

### 反復処理中の配列の変更

次の例では `one`, `two`, `four` をログ出力します。

値 `two` を含む項目に到達すると、配列全体の最初の項目が取り出され、残りのすべての項目が 1 つずつ繰り上がります。
要素 `four` は配列の前の方の位置にあるので、 `three` は飛ばされます。

`forEach()` は反復処理の前に配列のコピーを生成しません。

```js
const words = ["one", "two", "three", "four"];
words.forEach((word) => {
  console.log(word);
  if (word === "two") {
    words.shift(); // 'one' が配列から削除される
  }
}); // one // two // four

console.log(words); // ['two', 'three', 'four']
```

### 配列の平坦化

次の例は学習目的だけのものです。
組み込みメソッドを使用して配列を平坦化したい場合は、{{jsxref("Array.prototype.flat()")}} を使用することができます。

```js
const flatten = (arr) => {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

// 使用方法
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 配列以外のオブジェクトに対する forEach() の呼び出し

`forEach()` メソッドは `this` の `length` プロパティを読み込み、次にキーが `length` より小さい非負の整数である各プロパティにアクセスします。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // length が 3 であるため forEach() からは無視される
};
Array.prototype.forEach.call(arrayLike, (x) => console.log(x));
// 2
// 3
// 4
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.forEach` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
