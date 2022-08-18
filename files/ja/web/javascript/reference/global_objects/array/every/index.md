---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/every
---
{{JSRef}}

**`every()`** メソッドは、列内のすべての要素が指定された関数で実装されたテストに合格するかどうかをテストします。これは論理値を返します。

{{EmbedInteractiveExample("pages/js/array-every.html","shorter")}}

## 構文

```
arr.every(callback(element[, index[, array]])[, thisArg])
```

### 引数

- `callback`

  - : 各要素に対してテストを実行する関数です。次の 3 つの引数を取ります。

    - `element`
      - : 現在処理されている要素です。
    - `index` {{Optional_inline}}
      - : 現在処理されている要素の添字です。
    - `array` {{Optional_inline}}
      - : `every` が実行されている配列です。

- `thisArg` {{Optional_inline}}
  - : `callback` を実行するときに `this` として使用すされる値です。

### 返値

`callback` 関数が配列のすべての要素について{{Glossary("truthy", "真値")}}を返した場合は **`true`**。それ以外は **`false`**。

## 解説

`every` は、与えられた `callback` 関数を、配列に含まれる各要素に対して一度ずつ、`callback` が{{Glossary("falsy", "偽値")}}を返す要素が見つかるまで呼び出します。そのような要素が見つかると、`every` メソッドはただちに `false` を返します。`callback` がすべての要素に対して{{Glossary("truthy", "真値")}}を返した場合、`every` は `true` を返します。

> **Note:** **注意**: このメソッドを空の配列に対して呼び出すと、無条件に `true` を返します。

`callback` は値が代入されている配列の要素に対してのみ呼び出されます。つまり、すでに削除された要素や、まだ値が代入されていない要素に対しては呼び出されません。

`callback` は、要素の値、要素の添字、走査されている Array オブジェクトという 3 つの引数をともなって呼び出されます。

`thisArg` 引数が `every` に与えられると、それがコールバックの `this` として使用されます。それ以外の場合は `undefined` が `this` の値として使われます。`callback` が最終的に監視できる `this` の値は、[関数から見た `this` の決定に関する一般的なルール](/ja/docs/Web/JavaScript/Reference/Operators/this)によって決定されます。

`every` は呼び出された配列を変化させません。

`every` によって処理される要素の範囲は、`callback` が最初に呼び出される前に設定されます。`callback` は、`every` の呼び出しが開始された後に追加された要素に対しては、実行されません。既存の配列要素が変更されたり、削除された場合、`callback` に渡される値は `every` がそれらを訪れた時点での値になり、`every` が削除された要素を訪問することはありません。

`every` は数学における「∀ （すべての / for all）」記号と同様のふるまいをします。具体的に言うと、空の配列に対しては `true` を返します。([空集合](https://en.wikipedia.org/wiki/Empty_set#Properties)のすべての要素が与えられた任意の条件を満たすことは[空虚に真](https://en.wikipedia.org/wiki/Vacuous_truth)です。)

## ポリフィル

`every` は ECMA-262 標準に第 5 版で追加されたもので、この標準のそれ以外の実装には存在しないかもしれません。これを回避するには、スクリプトの最初に以下のコードを挿入することで、ネイティブで対応していない実装でも `every` を使用できるようにすることができます。

このアルゴリズムは、`Object` と `TypeError` が元の値を持ち、`callbackfn.call` が {{jsxref("Function.prototype.call")}} の元の値に評価されると仮定するもので、ECMA-262 第 5 版で指定されているものと全く同じです。

```js
if (!Array.prototype.every) {
  Array.prototype.every = function(callbackfn, thisArg) {
    'use strict';
    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the this
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal method
    //    of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
    if (typeof callbackfn !== 'function' && Object.prototype.toString.call(callbackfn) !== '[object Function]') {
      throw new TypeError();
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {
        var testResult;
        // i. Let kValue be the result of calling the Get internal method
        //    of O with argument Pk.
        kValue = O[k];

        // ii. Let testResult be the result of calling the Call internal method
        // of callbackfn with T as the this value if T is not undefined
        // else is the result of calling callbackfn
        // and argument list containing kValue, k, and O.
        if(T) testResult = callbackfn.call(T, kValue, k, O);
        else testResult = callbackfn(kValue,k,O)

        // iii. If ToBoolean(testResult) is false, return false.
        if (!testResult) {
          return false;
        }
      }
      k++;
    }
    return true;
  };
}
```

## 例

### すべての配列要素の大きさをテストする

次の例は、配列内のすべての要素が 10 よりも大きいかどうかテストします。

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### アロー関数の使用

[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)はより短い構文で同じテストを提供します。

```js
[12, 5, 8, 130, 44].every(x => x >= 10);   // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true
```

### 初期配列への影響 (変更、追加、削除)

次の例は、配列が変更されたときに `every` メソッドの動作をテストするものです。

```js
// ---------------
// Modifying items
// ---------------
let arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) => {
  arr[index+1] -= 1
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 2
})

// Loop runs for 3 iterations, but would
// have run 2 iterations without any modification
//
// 1st iteration: [1,1,3,4][0] -> 1
// 2nd iteration: [1,1,2,4][1] -> 1
// 3rd iteration: [1,1,2,3][2] -> 2

// ---------------
// Appending items
// ---------------
arr = [1, 2, 3];
arr.every( (elem, index, arr) => {
  arr.push('new')
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4
})

// Loop runs for 3 iterations, even after appending new items
//
// 1st iteration: [1, 2, 3, new][0] -> 1
// 2nd iteration: [1, 2, 3, new, new][1] -> 2
// 3rd iteration: [1, 2, 3, new, new, new][2] -> 3

// ---------------
// Deleting items
// ---------------
arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) => {
  arr.pop()
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4
})

// Loop runs for 2 iterations only, as the remaining
// items are `pop()`ed off
//
// 1st iteration: [1,2,3][0] -> 1
// 2nd iteration: [1,2][1] -> 2
```

## 仕様書

| 仕様書                                                                                                   |
| -------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-array.prototype.every', 'Array.prototype.every')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.every")}}

## 関連情報

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
