---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
---

{{JSRef}}

**`some()`** 方法會透過給定函式、測試陣列中是否至少有一個元素，通過該函式所實作的測試。這方法回傳的是布林值。

{{EmbedInteractiveExample("pages/js/array-some.html")}}

> **備註：** 如果輸入空陣列的話，這個方法會回傳 `false`。

## 語法

```js-nolint
arr.some(callback[, thisArg])
```

### 參數

- `callback`

  - : 用來測試每一個元素的函式，它包含三個引數：

    - `currentValue`
      - : 目前正要被處理的陣列元素。
    - `index{{Optional_inline}}`
      - : 目前正要被處理的陣列元素之索引值。
    - `array{{Optional_inline}}`
      - : 呼叫 `some()` 的陣列。

- `thisArg{{Optional_inline}}`
  - : 執行 `callback` 回呼函式的 `this` 值。

### 回傳值

若回呼函式在處理任何一個陣列元素時得到 {{Glossary("truthy")}} 值，則回傳 **`true`**。否則，回傳值為 **`false`**。

## 描述

The `some()` method executes the `callback` function once for each element present in the array until it finds the one where `callback` returns a _truthy_ value (a value that becomes true when converted to a Boolean). If such an element is found, `some()` immediately returns `true`. Otherwise, `some()` returns `false`. `callback` is invoked only for indexes of the array with assigned values. It is not invoked for indexes which have been deleted or which have never been assigned values.

`callback` is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

If a `thisArg` parameter is provided to `some()`, it will be used as the callback's `this` value. Otherwise, the value {{jsxref("undefined")}} will be used as its `this` value. The `this` value ultimately observable by `callback` is determined according to [the usual rules for determining the `this` seen by a function](/zh-TW/docs/Web/JavaScript/Reference/Operators/this).

`some()` does not mutate the array on which it is called.

The range of elements processed by `some()` is set before the first invocation of `callback`. Elements appended to the array after the call to `some()` begins will not be visited by `callback`. If an existing, unvisited element of the array is changed by `callback`, its value passed to the visiting `callback` will be the value at the time that `some()` visits that element's index. Elements that are deleted are not visited.

## 範例

### 測試陣列元素的數值

以下範例將測試是否最少有一個元素的數值大於 10。

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

{{ EmbedLiveSample('測試陣列元素的數值') }}

### 使用箭頭函式測試

[箭頭函式](/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions)能給相同的測試，提供更簡潔的語法。

```js
[2, 5, 8, 1, 4].some((x) => x > 10); //false
[12, 5, 8, 1, 4].some((x) => x > 10); // true
```

{{ EmbedLiveSample('使用箭頭函式測試') }}

### 測試陣列元素的數值是否存在

To mimic the function of the `includes()` method, this custom function returns `true` if the element exists in the array:

```js
const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
}

checkAvailability(fruits, "kela"); // false
checkAvailability(fruits, "banana"); // true
```

{{ EmbedLiveSample('測試陣列元素的數值是否存在') }}

### Checking whether a value exists using an arrow function

```js
const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, "kela"); // false
checkAvailability(fruits, "banana"); // true
```

{{ EmbedLiveSample('Checking_whether_a_value_exists_using_an_arrow_function') }}

### Converting any value to Boolean

```js
const TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) {
  "use strict";

  if (typeof value === "string") {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some(function (t) {
    return t === value;
  });
}

getBoolean(false); // false
getBoolean("false"); // false
getBoolean(1); // true
getBoolean("true"); // true
```

{{ EmbedLiveSample('Converting_any_value_to_Boolean') }}

## Polyfill

`some()` was added to the ECMA-262 standard in the 5th edition, and it may not be present in all implementations of the standard. You can work around this by inserting the following code at the beginning of your scripts, allowing use of `some()` in implementations which do not natively support it. This algorithm is exactly the one specified in ECMA-262, 5th edition, assuming {{jsxref("Object")}} and {{jsxref("TypeError")}} have their original values and that `fun.call` evaluates to the original value of {{jsxref("Function.prototype.call()")}}.

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: http://es5.github.io/#x15.4.4.17
if (!Array.prototype.some) {
  Array.prototype.some = function (fun, thisArg) {
    "use strict";

    if (this == null) {
      throw new TypeError("Array.prototype.some called on null or undefined");
    }

    if (typeof fun !== "function") {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;

    for (var i = 0; i < len; i++) {
      if (i in t && fun.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}
```

{{ EmbedLiveSample('Polyfill') }}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.some()")}}
