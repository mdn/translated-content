---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
---

{{JSRef}}

**`every()`** 方法會測試陣列中的所有元素是否都通過了由給定之函式所實作的測試。

{{EmbedInteractiveExample("pages/js/array-every.html")}}

## 語法

```plain
arr.every(callback[, thisArg])
```

### 參數

- `callback`

  - : 用來測試每一個元素的函式，它包含三個引數：

    - `currentValue`（必要的）
      - : 目前正要被處理的陣列元素。
    - `index`（可選的）
      - : 目前正要被處理的陣列元素之索引值。
    - `array`（可選的）
      - : 呼叫 `every` 的陣列。

- `thisArg`
  - : 可選的。執行 `callback` 回呼函式的 `this` 值。

### 回傳值

若回呼函式在處理每一個陣列元素時皆得到 {{Glossary("truthy")}} 值，則回傳 **`true`**。否則，回傳值為 **`false`**。

## 描述

The `every` method executes the provided `callback` function once for each element present in the array until it finds one where `callback` returns a {{Glossary("falsy")}} value. If such an element is found, the `every` method immediately returns `false`. Otherwise, if `callback` returns a {{Glossary("truthy")}} value for all elements, `every` returns `true`. `callback` is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.

`callback` is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

If a `thisArg` parameter is provided to `every`, it will be used as callback's `this` value. Otherwise, the value `undefined` will be used as its `this` value. The `this` value ultimately observable by `callback` is determined according to [the usual rules for determining the `this` seen by a function](/zh-TW/docs/Web/JavaScript/Reference/Operators/this).

`every` does not mutate the array on which it is called.

The range of elements processed by `every` is set before the first invocation of `callback`. Elements which are appended to the array after the call to `every` begins will not be visited by `callback`. If existing elements of the array are changed, their value as passed to `callback` will be the value at the time `every` visits them; elements that are deleted are not visited.

`every` acts like the "for all" quantifier in mathematics. In particular, for an empty array, it returns true. (It is [vacuously true](http://en.wikipedia.org/wiki/Vacuous_truth#Vacuous_truths_in_mathematics) that all elements of the [empty set](http://en.wikipedia.org/wiki/Empty_set#Common_problems) satisfy any given condition.)

## 範例

### Testing size of all array elements

The following example tests whether all elements in the array are bigger than 10.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### Using arrow functions

[Arrow functions](/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions) provide a shorter syntax for the same test.

```js
[12, 5, 8, 130, 44].every(x => x >= 10); // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true
```

## Polyfill

`every` was added to the ECMA-262 standard in the 5th edition; as such it may not be present in other implementations of the standard. You can work around this by inserting the following code at the beginning of your scripts, allowing use of `every` in implementations which do not natively support it. This algorithm is exactly the one specified in ECMA-262, 5th edition, assuming `Object` and `TypeError` have their original values and that `callbackfn.call` evaluates to the original value of {{jsxref("Function.prototype.call")}}

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
    if (typeof callbackfn !== 'function') {
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

        // i. Let kValue be the result of calling the Get internal method
        //    of O with argument Pk.
        kValue = O[k];

        // ii. Let testResult be the result of calling the Call internal method
        //     of callbackfn with T as the this value and argument list
        //     containing kValue, k, and O.
        var testResult = callbackfn.call(T, kValue, k, O);

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

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.every()")}}
