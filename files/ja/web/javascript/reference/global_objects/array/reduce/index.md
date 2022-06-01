---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
tags:
  - Array
  - 配列メソッド
  - ECMAScript 5
  - JavaScript
  - メソッド
  - プロトタイプ
  - Reduce
  - リファレンス
  - ポリフィル
browser-compat: javascript.builtins.Array.reduce
translation_of: Web/JavaScript/Reference/Global_Objects/Array/reduce
---
{{JSRef}}

**`reduce()`** メソッドは、配列のそれぞれの要素に対して、順番通りに、ユーザーが提供した「縮小」コールバック関数を呼び出します。その際、直前の要素における計算結果の返値を渡します。配列のすべての要素に対して縮小関数を実行した結果が単一の値が最終結果になります。

コールバックの初回実行時には「直前の計算の返値」は存在しません。
初期値が与えらえた場合は、代わりに使用されることがあります。
そうでない場合は、配列の要素 0 が初期値として使用され、次の要素（0 の位置ではなく 1 の位置）から反復処理が開始されます。

`reduce()` で一番わかりやすいのは、配列のすべての要素の和を返す場合でしょう。

{{EmbedInteractiveExample("pages/js/array-reduce.html")}}

縮小関数は配列を要素ごとに走査し、それぞれの段階で、前の段階の結果に現在の配列の値を加えていきます (この結果は、それ以前のすべての段階を合算したものです)。

## 構文

```js
// アロー関数
reduce((previousValue, currentValue) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

// コールバック関数
reduce(callbackFn)
reduce(callbackFn, initialValue)

// インラインコールバック関数
reduce(function(previousValue, currentValue) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)
```

### 引数

- `callbackFn`
  - : 4 つの引数を取る「縮小」関数です。
    - `previousValue`: 前回の `callbackFn` の呼び出し結果の値です。
      初回の呼び出しでは `initalValue` が指定されていた場合はその値、そうでない場合は `array[0]` の値です。
    - `currentValue`: 現在の要素の値です。
      初回の呼び出しでは `initalValue` が指定された場合は `array[0]` の値であり、そうでない場合は `array[1]` の値です。
    - `currentIndex`: 現在の位置です。
      初回の呼び出しでは、 `initialValue` が指定された場合は `0`、そうでない場合は `1` です。
    - `array`: 走査する配列です。

- `initialValue` {{optional_inline}}
  - : コールバックが初めて呼び出されたときの *previousValue* の初期値です。
    `initialValue` が指定された場合は、 `currentValue` も配列の最初の値に初期化されます。
    `initialValue` が指定され*なかった*場合、 `previousValue` は配列の最初の値で初期化され、 `currentValue` は配列の 2 番目の値で初期化されます。

### 返値

配列全体にわたって「縮小」コールバック関数を実行した結果の値です。

### 例外

- {{jsxref("TypeError")}}

  - : 配列に要素がなく、かつ `initialValue` が提供されなかった場合に発生します。

## 解説

ECMAScript の仕様書は、 `reduce()` の動作を次のように記述しています。

> *callbackfn* は、4 つの引数を取る関数でなければなりません。 `reduce` は、配列の最初の要素の後の各要素に対して、昇順にコールバックを関数として呼び出します。
>
> *callbackfn* は次の 4 つの引数で呼び出されます。
>
> - the *previousValue* (前回の *callbackfn* の呼び出し結果の値)
> - the *currentValue* (現在の要素の値)
> - the *currentIndex*
> - 走査中のオブジェクト
> そのコールバックが最初に呼び出されるとき、 *previousValue* と *currentValue* は以下の 2 通りのうちのどちらかになります。
> - *initialValue* が `reduce` の呼び出しによって与えられた場合、 *previousValue* は to *initialValue* と同じになり、 *currentValue* は配列の最初の値と等しくなります。
> - *initialValue* が与えられていない場合は、 *previousValue* は配列の最初の値と同じになり、 *currentValue* は 2 番目の値と同じになります。
> 配列に要素がなく、かつ *initialValue* が与えられていない場合は {{jsxref("TypeError")}} が発生します。
>
> `reduce` は、呼び出されたオブジェクトを直接は変更しませんが、 *callbackfn* の呼び出しによってオブジェクトが変更される可能性はあります。
>
> `reduce` で処理される要素の範囲は、 *callbackfn* が最初に呼び出される前に設定されます。 `reduce` の呼び出しが始まった後に配列に追加された要素は、 *callbackfn* が処理することはありません。配列の既存の要素が変更された場合、 *callbackfn* には `reduce` がその値を処理する時点の値が渡されます。 `reduce` が呼び出された後、処理されるまでに削除された要素は処理されません。

配列が (位置に関わらず) 1 つの要素しか持たず、*initialValue* が指定されなかった場合、または *initialValue* が指定されていても配列が空だった場合、 _`callbackfn`_ は*実行されずに*要素が返却されます。

*initialValue* が提供され、配列が空でない場合、 reduce メソッドは常に 0 の位置コールバック関数を呼び出し始めます。

*initialValue* が提供されなかった場合、 reduce メソッドは、次の例に示すように、長さが 1 より大きい配列、長さが 1 の配列、長さが 0 の配列に対して異なる動作をします。

```js
const getMax = (a, b) => Math.max(a, b);

// コールバックは 0 の位置から配列内の全要素に対して呼び出される
[1, 100].reduce(getMax, 50); // 100
[    50].reduce(getMax, 10); // 50

// コールバックは 1 の位置に対して 1 度だけ呼び出される
[1, 100].reduce(getMax);     // 100

// コールバックは呼び出されない
[    50].reduce(getMax);     // 50
[      ].reduce(getMax, 1);  // 1

[      ].reduce(getMax);     // TypeError
```

### 初期値がない場合の reduce() の動作

下記のコードは、初期値がない場合に配列に `reduce()` を呼び出したときに何が起こるかを示します。

```js
const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}

array.reduce(reducer);
```

コールバック関数は 4 回呼び出され、各回の引数の内容は以下のようになります。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">
        <code><var>callback</var></code> の反復処理
      </th>
      <th scope="col">
        <code><var>previousValue</var></code>
      </th>
      <th scope="col">
        <code><var>currentValue</var></code>
      </th>
      <th scope="col">
        <code><var>currentIndex</var></code>
      </th>
      <th scope="col">
        <code><var>array</var></code>
      </th>
      <th scope="col">返値</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">初回の呼出し</th>
      <td><code>15</code></td>
      <td><code>16</code></td>
      <td><code>1</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>31</code></td>
    </tr>
    <tr>
      <th scope="row">2 回目の呼出し</th>
      <td><code>31</code></td>
      <td><code>17</code></td>
      <td><code>2</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>48</code></td>
    </tr>
    <tr>
      <th scope="row">3 回目の呼出し</th>
      <td><code>48</code></td>
      <td><code>18</code></td>
      <td><code>3</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>66</code></td>
    </tr>
    <tr>
      <th scope="row">4 回目の呼出し</th>
      <td><code>66</code></td>
      <td><code>19</code></td>
      <td><code>4</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>85</code></td>
    </tr>
  </tbody>
</table>

`reduce()` の返値は、コールバック呼び出しの最後の返値である (`85`) となるでしょう。


### 初期値がある場合の reduce() の動作

ここでは、同じアルゴリズムで同じ配列を減らしますが、 `reduce()` の 2 番目の引数として `10` という*初期値*を渡します。
```

```js
[15, 16, 17, 18, 19].reduce( (previousValue, currentValue, currentIndex, array) => previousValue + currentValue, 10 )
```

コールバックは 5 回呼び出され、それぞれの呼び出しにおける引数と返値値は次のようになる。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">
        <code><var>callback</var></code> の反復処理
      </th>
      <th scope="col">
        <code><var>previousValue</var></code>
      </th>
      <th scope="col">
        <code><var>currentValue</var></code>
      </th>
      <th scope="col">
        <code><var>currentIndex</var></code>
      </th>
      <th scope="col">
        <code><var>array</var></code>
      </th>
      <th scope="col">返値</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">初回の呼出し</th>
      <td><code>10</code></td>
      <td><code>15</code></td>
      <td><code>0</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>25</code></td>
    </tr>
    <tr>
      <th scope="row">2 回目の呼出し</th>
      <td><code>25</code></td>
      <td><code>16</code></td>
      <td><code>1</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>41</code></td>
    </tr>
    <tr>
      <th scope="row">3 回目の呼出し</th>
      <td><code>41</code></td>
      <td><code>17</code></td>
      <td><code>2</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>58</code></td>
    </tr>
    <tr>
      <th scope="row">4 回目の呼出し</th>
      <td><code>58</code></td>
      <td><code>18</code></td>
      <td><code>3</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>76</code></td>
    </tr>
    <tr>
      <th scope="row">5 回目の呼出し</th>
      <td><code>76</code></td>
      <td><code>19</code></td>
      <td><code>4</code></td>
      <td><code>[15, 16, 17, 18, 19]</code></td>
      <td><code>95</code></td>
    </tr>
  </tbody>
</table>

この場合の `reduce()` の返値は `20` となります。

## 例

### 配列内の値の合計値を出す

```js
let sum = [0, 1, 2, 3].reduce(function (previousValue, currentValue) {
  return previousValue + currentValue
}, 0)
// sum is 6
```

また、アロー関数を用いて書くこともできます。

```js
let total = [ 0, 1, 2, 3 ].reduce(
  ( previousValue, currentValue ) => previousValue + currentValue,
  0
)
```

### オブジェクトの配列の値の合計値を出す

オブジェクトの配列に含まれた値の合計値を出すには、すべての項目を関数内で取得できるようにするために *initialValue* を指定する**必要があります**。

```js
let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.x
}, initialValue)

console.log(sum) // logs 6
```

また、アロー関数を用いて書くこともできます。

```js
let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (previousValue, currentValue) => previousValue + currentValue.x
    , initialValue
)

console.log(sum) // logs 6
```

### 二次元配列を一次元配列にする

```js
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(previousValue, currentValue) {
    return previousValue.concat(currentValue)
  },
  []
)
// flattened is [0, 1, 2, 3, 4, 5]
```

また、アロー関数を用いて書くこともできます。

```js
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( previousValue, currentValue ) => previousValue.concat(currentValue),
  []
)
```

### オブジェクトの値のインスタンスを数える

```js
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

### プロパティによってオブジェクトをグループ化

```js
let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

let groupedPeople = groupBy(people, 'age')
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
let friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}]

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
let allbooks = friends.reduce(function(previousValue, currentValue) {
  return [...previousValue, ...currentValue.books]
}, ['Alphabet'])

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
```

### 配列内の重複要素を除去する

> **Note:** {{jsxref("Set")}} と {{jsxref("Array.from()")}} に対応している環境を使っている場合は、`let arrayWithNoDuplicates = Array.from(new Set(myArray))` を使うことで重複要素を除去された配列を取得することができます。

```js
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue)
  }
  return previousValue
}, [])

console.log(myArrayWithNoDuplicates)
```

### .filter().map() を .reduce() で置き換える

{{jsxref("Array.filter()")}} を使用した後で {{jsxref("Array.map()")}} を使用すると配列を二度走査しますが、{{jsxref("Array.reduce()")}} では同じ効果を一度の操作で実現することができ、もっと効率的です。(`for` ループが好きなのであれば、{{jsxref("Array.forEach()")}} で一度の操作で filter と map を行うことができます)。

```js
const numbers = [-5, 6, 2, 0,];

const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    previousValue.push(doubled);
  }
  return previousValue;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]
```

### シーケンス上の Promise を動かす

```js
/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  )
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5)
  })
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2)
  })
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
 return a * 3
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4)
  })
}

const promiseArr = [p1, p2, f3, p4]
runPromiseInSequence(promiseArr, 10)
  .then(console.log)   // 1200
```

### パイプによって関数を合成する

```js
// Building-blocks to use for composition
const double = x => x + x
const triple = x => 3 * x
const quadruple = x => 4 * x

// Function composition enabling pipe functionality
const pipe = (...functions) => input => functions.reduce(
    (acc, fn) => fn(acc),
    input
)

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple)
const multiply9 = pipe(triple, triple)
const multiply16 = pipe(quadruple, quadruple)
const multiply24 = pipe(double, triple, quadruple)

// Usage
multiply6(6)   // 36
multiply9(9)   // 81
multiply16(16) // 256
multiply24(10) // 240
```

### reduce を使って map メソッドを書く

```js
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, initialValue) {
    return this.reduce(function(mappedArray, currentValue, currentIndex, array) {
      mappedArray[currentIndex] = callback.call(initialValue, currentValue, currentIndex, array)
      return mappedArray
    }, [])
  }
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, currentIndex, array) => currentValue + currentIndex + array.length
) // [5, 7, , 10]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Array.prototype.reduce` のポリフィルが [`core-js`](https://github.com/zloirock/core-js#ecmascript-array) で利用できます
- {{jsxref("Array.prototype.reduceRight()")}}
