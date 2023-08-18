---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`reduce()`** メソッドは、配列のそれぞれの要素に対して、ユーザーが提供した「縮小」コールバック関数を呼び出します。その際、直前の要素における計算結果の返値を渡します。配列のすべての要素に対して縮小関数を実行した結果が単一の値が最終結果になります。

コールバックの初回実行時には「直前の計算の返値」は存在しません。
初期値が与えらえた場合は、代わりに使用されることがあります。
そうでない場合は、配列の要素 0 が初期値として使用され、次の要素（0 の位置ではなく 1 の位置）から反復処理が開始されます。

`reduce()` で一番わかりやすいのは、配列のすべての要素の和を返す場合でしょう。

{{EmbedInteractiveExample("pages/js/array-reduce.html")}}

縮小関数は配列を要素ごとに走査し、それぞれの段階で、前の段階の結果に現在の配列の値を加えていきます (この結果は、それ以前のすべての段階を合算したものです)。

## 構文

```js-nolint
// アロー関数
reduce((previousValue, currentValue) => { /* … */ } )
reduce((previousValue, currentValue, currentIndex) => { /* … */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* … */ } )

reduce((previousValue, currentValue) => { /* … */ } , initialValue)
reduce((previousValue, currentValue, currentIndex) => { /* … */ } , initialValue)
reduce((previousValue, currentValue, currentIndex, array) => { /* … */ }, initialValue)

// コールバック関数
reduce(callbackFn)
reduce(callbackFn, initialValue)

// インラインコールバック関数
reduce(function(previousValue, currentValue) { /* … */ })
reduce(function(previousValue, currentValue, currentIndex) { /* … */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* … */ })

reduce(function(previousValue, currentValue) { /* … */ }, initialValue)
reduce(function(previousValue, currentValue, currentIndex) { /* … */ }, initialValue)
reduce(function(previousValue, currentValue, currentIndex, array) { /* … */ }, initialValue)
```

### 引数

- `callbackFn`
  - : 以下の引数を取る「縮小」関数です。
    - `previousValue`
      - : 前回の `callbackFn` の呼び出し結果の値です。初回の呼び出しでは `initialValue` が指定されていた場合はその値、そうでない場合は `array[0]` の値です。
    - `currentValue`
      - : 現在の要素の値です。初回の呼び出しでは `initialValue` が指定された場合は `array[0]` の値であり、そうでない場合は `array[1]` の値です。
    - `currentIndex`
      - : `currentValue` の位置です。初回の呼び出しでは、 `initialValue` が指定された場合は `0`、そうでない場合は `1` です。
    - `array`
      - : 走査する配列です。
- `initialValue` {{optional_inline}}
  - : コールバックが初めて呼び出されたときの `previousValue` の初期値です。
    `initialValue` が指定された場合は、 `currentValue` も配列の最初の値に初期化されます。
    `initialValue` が指定され*なかった*場合、 `previousValue` は配列の最初の値で初期化され、 `currentValue` は配列の 2 番目の値で初期化されます。

### 返値

配列全体にわたって「縮小」コールバック関数を実行した結果の値です。

### 例外

- {{jsxref("TypeError")}}

  - : 配列に要素がなく、かつ `initialValue` が提供されなかった場合に発生します。

## 解説

`reduce()` メソッドは 2 つの引数をとります。コールバック関数と、オプションで初期値を指定することができます。
初期値が指定された場合、 `reduce()` は配列のそれぞれの要素に対して順に「縮小」コールバック関数を呼び出します。初期値が指定されなかった場合、 `reduce()` は配列の最初の要素の後にあるそれぞれの要素に対してコールバック関数を呼び出します。

`reduce()` は、配列の反復処理の最後にコールバック関数から返される値を返します。

`reduce()` は[関数型プログラミング](https://ja.wikipedia.org/wiki/関数型プログラミング)の中心的な概念です。ここでは、どの値も変異させることができないので、配列のすべての値を積算するには、反復処理のたびに新しい積算値を返さなければなりません。この約束事は JavaScript の `reduce()` にも当てはまります。[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)や他の可能な限りコピーする方法を使用して、既存のものを変更せずに、アキュームレーターとして新しい配列やオブジェクトを作成すべきなのです。もし、アキュームレーターをコピーする代わりに変化させることにした場合、コールバックで変更したオブジェクトを返すことを忘れないでください、さもなければ、次の反復処理で undefined を受け取ることになります。

### reduce() を使用しない場合

`reduce()` のような再帰的な関数は強力ですが、特に経験の浅い JavaScript 開発者にとっては理解するのが難しい場合があります。他の配列メソッドを使用した場合にコードが明確になるなら、開発者は `reduce()` を使用する他の利点と可読性をトレードオフで比較検討する必要があります。 `reduce()` が最適な選択である場合は、文書化と意味的な変数名を使用することが可読性の欠点を軽減するのに役立ちます。

### 配列変更時の動作について

`reduce()` メソッド自身は、使用する配列を変更することはありません。しかし、コールバック関数内のコードが配列を変更することは可能です。以下は、配列の改変が起こる可能性のあるシナリオと、そのシナリオにおける `reduce()` の動作です。

- もし `reduce()` が配列に対して反復処理を始めた後に配列に要素が追加された場合、コールバック関数は追加された要素に対して反復処理を行いません。
- 配列の既存の要素が変更された場合、コールバック関数に渡される値は、reduce()が配列に対して最初に呼び出された時点の値になります。
- `reduce()` の呼び出しが始まった後、反復処理される前に削除された配列要素は `reduce()` の処理が行われません。

### 稀な場合

配列が（位置に関わらず）1 つの要素しか持たず、 `initialValue` が指定されなかった場合、または `initialValue` が指定されていても配列が空だった場合、 `callbackfn` は*実行されずに*要素が返却されます。

`initialValue` が提供され、配列が空でない場合、 reduce メソッドは常に 0 の位置コールバック関数を呼び出し始めます。

`initialValue` が提供されなかった場合、 reduce メソッドは、次の例に示すように、長さが 1 より大きい配列、長さが 1 の配列、長さが 0 の配列に対して異なる動作をします。

```js
const getMax = (a, b) => Math.max(a, b);

// コールバックは 0 の位置から配列内の全要素に対して呼び出される
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

// コールバックは 1 の位置に対して 1 度だけ呼び出される
[1, 100].reduce(getMax); // 100

// コールバックは呼び出されない
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1

[].reduce(getMax); // TypeError
```

## 例

### 初期値がない場合の reduce() の動作

下記のコードは、初期値がない場合に配列に `reduce()` を呼び出したときに何が起こるかを示します。

```js
const array = [15, 16, 17, 18, 19];

function reducer(previousValue, currentValue, index) {
  const returns = previousValue + currentValue;
  console.log(
    `previousValue: ${previousValue}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);
```

コールバック関数は 4 回呼び出され、各回の引数の内容は以下のようになります。

|                  | `previousValue` | `currentValue` | `index` | 返値 |
| ---------------- | --------------- | -------------- | ------- | ---- |
| 最初の呼び出し   | `15`            | `16`           | `1`     | `31` |
| 2 番目の呼び出し | `31`            | `17`           | `2`     | `48` |
| 3 番目の呼び出し | `48`            | `18`           | `3`     | `66` |
| 4 番目の呼び出し | `66`            | `19`           | `4`     | `85` |

`array` の要素は処理中に変化しません。常に `[15, 16, 17, 18, 19]` です。 `reduce()` の返値は、コールバック呼び出しの最後の返値である (`85`) となるでしょう。

### 初期値がある場合の reduce() の動作

ここでは、同じアルゴリズムで同じ配列を減らしますが、 `reduce()` の 2 番目の引数として `10` という `initialValue` を渡します。

```js
[15, 16, 17, 18, 19].reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  10,
);
```

コールバックは 5 回呼び出され、それぞれの呼び出しにおける引数と返値は次のようになります。

|                  | `previousValue` | `currentValue` | `index` | 返値 |
| ---------------- | --------------- | -------------- | ------- | ---- |
| 最初の呼び出し   | `10`            | `15`           | `0`     | `25` |
| 2 番目の呼び出し | `25`            | `16`           | `1`     | `41` |
| 3 番目の呼び出し | `41`            | `17`           | `2`     | `58` |
| 4 番目の呼び出し | `58`            | `18`           | `3`     | `76` |
| 5 番目の呼び出し | `76`            | `19`           | `4`     | `95` |

この場合の `reduce()` の返値は `95` となります。

## 例

### 配列内の値の合計値を出す

```js
let sum = [0, 1, 2, 3].reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, 0);
// sum is 6
```

また、アロー関数を用いて書くこともできます。

```js
let total = [0, 1, 2, 3].reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0,
);
```

### オブジェクト配列の値の合計値

オブジェクトの配列に含まれた値の合計値を出すには、すべての項目を関数内で取得できるようにするために `initialValue` を指定する**必要があります**。

```js
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (previousValue, currentValue) => previousValue + currentValue.x,
  0,
);

console.log(sum); // logs 6
```

### 二次元配列を一次元配列にする

```js
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(
  (previousValue, currentValue) => previousValue.concat(currentValue),
  [],
);
// flattened is [0, 1, 2, 3, 4, 5]
```

### オブジェクトの値のインスタンスを数える

```js
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

### プロパティによってオブジェクトをグループ化

```js
const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    const curGroup = acc[key] ?? [];

    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
}

const groupedPeople = groupBy(people, "age");
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }
```

### スプレッド演算子と initialValue を使ってオブジェクトの配列に含まれる配列を結合させる

```js
// friends - an array of objects
// where object field "books" is a list of favorite books
const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
const allbooks = friends.reduce(
  (previousValue, currentValue) => [...previousValue, ...currentValue.books],
  ["Alphabet"],
);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
```

### 配列内の重複要素を除去する

> **メモ:** {{jsxref("Set")}} と {{jsxref("Array.from()")}} に対応している環境を使っている場合は、`const arrayWithNoDuplicates = Array.from(new Set(myArray))` を使うことで重複要素を除去された配列を取得することができます。

```js
const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const myArrayWithNoDuplicates = myArray.reduce(
  (previousValue, currentValue) => {
    if (!previousValue.includes(currentValue)) {
      return [...previousValue, currentValue];
    }
    return previousValue;
  },
  [],
);

console.log(myArrayWithNoDuplicates);
```

### .filter().map() を .reduce() で置き換える

{{jsxref("Array/filter", "filter()")}} を使用した後で {{jsxref("Array/map", "map()")}} を使用すると配列を二度走査しますが、{{jsxref("Array/reduce", "reduce()")}} では同じ効果を一度の操作で実現することができ、もっと効率的です。(`for` ループが好きなのであれば、{{jsxref("Array/forEach", "forEach()")}} で一度の操作で filter と map を行うことができます)。

```js
const numbers = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    return [...previousValue, doubled];
  }
  return previousValue;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]
```

### 直列のプロミスの実行

```js
/**
 * 一連のプロミスハンドラーを連鎖させる。
 *
 * @param {array} arr - プロミスハンドラーのリストで、各ハンドラーは前のハンドラーの
 * 解決した結果を受け取り、別のプロミスを返します。
 * @param {*} input プロミスチェーンを開始するための初期値
 * @return {Object} ハンドラーの連鎖を伴う最終プロミス
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input),
  );
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
  return a * 3;
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10).then(console.log); // 1200
```

### パイプによって関数を合成する

```js
// 合成に使用する素材
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// パイプ機能を実現する関数の合成
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

// 詳細な値の乗算のための合成関数
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// 使用方法
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.reduce` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.reduceRight()")}}
