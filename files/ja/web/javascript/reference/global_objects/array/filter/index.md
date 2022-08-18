---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
  - メソッド
  - 配列
translation_of: Web/JavaScript/Reference/Global_Objects/Array/filter
---
{{JSRef}}

**`filter()`** メソッドは、与えられた関数によって実装されたテストに合格したすべての配列からなる**新しい配列を生成**します。

{{EmbedInteractiveExample("pages/js/array-filter.html","shorter")}}

## 構文

```js
let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])
```

### 引数

- `callback`

  - : 配列の各要素に対して実行するテスト関数です。この関数が `true` を返した要素は残され、`false` を返した要素は取り除かれます。

    この関数は３つの引数を受け付けます。

    - `element`
      - : 配列内で処理中の現在の要素です。
    - `index`{{optional_inline}}
      - : 配列内で処理中の現在の要素の位置です。
    - `array`{{optional_inline}}
      - : `filter` メソッドが実行されている配列です。

- `thisArg`{{optional_inline}}
  - : `callback` を実行するときに `this` として使用する値です。

### 返値

テストに合格した要素からなる新しい配列です。テストに合格した要素がなかった場合は、空の配列が返されます。

## 解説

`filter()` は、与えられた `callback` 関数を配列の各要素に対して一度ずつ呼び出し、`callback` が [`true` と評価される値](/ja/docs/Glossary/Truthy)を返したすべての要素からなる新しい配列を生成します。`callback` は値が代入されている配列の添字に対してのみ呼び出されます。つまり、すでに削除された添字や、まだ値が代入されていない添字に対しては呼び出されません。`callback` によるテストに合格しなかった配列要素は単純にスキップされ、新しい配列には含まれないだけです。

`callback` は 3 つの引数と共に呼び出されます。

1.  要素の値
2.  要素の添字
3.  走査されている配列オブジェクト

`filter` に引数 `thisArg` が与えられた場合、そのオブジェクトは `callback` 関数内の `this` 値として使われます。そうでない場合、 `undefined` が `this` 値として使われます。`callback` 関数内の最終的な `this` 値は[関数内の `this` を決定する一般的ルール](/ja/docs/Web/JavaScript/Reference/Operators/this)に従って決められます。

`filter()` は呼び出された配列を変化させません。

`filter()` によって処理される配列要素の範囲は、`callback` が最初に呼び出される前に設定されます。`filter()` の呼び出しが開始された後に (`callback` から) 追加された配列要素に対しては、`callback` は実行されません。既存の配列要素が削除された場合は、同様にそれらの要素は処理されません。

## ポリフィル

`filter()` は ECMA-262 標準の第 5 版で追加されました。したがって、この標準のすべての実装に存在するとは限りません。

回避策として、スクリプトの最初に以下のコードを挿入して、ネイティブに対応していない ECMA-262 の実装で filter() を使用できるようにすることができます。このアルゴリズムは ECMA-262 第 5 版で指定されているものと完全に等価で、 `fn.call` が {{jsxref("Function.prototype.bind()")}} の元の値を評価し、 {{jsxref("Array.prototype.push()")}} が元の値を持つことを仮定しています。

```js
if (!Array.prototype.filter){
  Array.prototype.filter = function(func, thisArg) {
    'use strict';
    if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
        throw new TypeError();

    var len = this.length >>> 0,
        res = new Array(len), // preallocate array
        t = this, c = 0, i = -1;

    var kValue;
    if (thisArg === undefined){
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          kValue = t[i]; // in case t is changed in callback
          if (func(t[i], i, t)){
            res[c++] = kValue;
          }
        }
      }
    }
    else{
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          kValue = t[i];
          if (func.call(thisArg, t[i], i, t)){
            res[c++] = kValue;
          }
        }
      }
    }

    res.length = c; // shrink down array to proper size
    return res;
  };
}
```

## 例

### 小さい値をすべて取り除く

次の例では、`filter()` を使って `10` 未満の値を持つ要素をすべて取り除いた配列を生成します。

```js
function isBigEnough(value) {
  return value >= 10
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
// filtered は [12, 130, 44]
```

### 配列内の素数をすべて検索する

以下の例は配列内のすべての素数を返します。

```
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
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
let arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
]

let invalidEntries = 0

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true
  }
  invalidEntries++
  return false;
}

let arrByID = arr.filter(filterByID)

console.log('Filtered Array\n', arrByID)
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries)
// Number of Invalid Entries = 5
```

### 配列内の検索

次の例では `filter()` を使って検索条件で配列の絞り込みをしています。

```js
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']
```

#### ES2015 版の実装

```js
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']
```

### 初期の配列への影響 (変更、追加、削除)

以下の例は、配列が変更された時の `filter` の動作をテストするものです。

```js
// Modifying each words
let words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']

const modifiedWords = words.filter( (word, index, arr) => {
  arr[index+1] +=' extra'
  return word.length < 6
})

console.log(modifiedWords)
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]

// Appending new words
words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']
const appendedWords = words.filter( (word, index, arr) => {
  arr.push('new')
  return word.length < 6
})

console.log(appendedWords)
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]

// Deleting words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const deleteWords = words.filter( (word, index, arr) => {
  arr.pop()
  return word.length < 6
})

console.log(deleteWords)
// Notice 'elite' is not even obtained as its been popped off `words` before filter can even get there
// ["spray" ,"limit"]
```

## 仕様書

| 仕様書                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-array.prototype.filter', 'Array.prototype.filter')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.filter")}}

## 関連情報

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
