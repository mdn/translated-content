---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
---

{{JSRef}}

**`some()`** 方法测试数组中是不是至少有 1 个元素通过了被提供的函数测试。它返回的是一个 Boolean 类型的值。

> **备注：** 如果用一个空数组进行测试，在任何情况下它返回的都是`false`。

{{EmbedInteractiveExample("pages/js/array-some.html")}}

## 语法

```js
// 箭头函数
some((element) => { /* … */ } )
some((element, index) => { /* … */ } )
some((element, index, array) => { /* … */ } )

// 回调函数
some(callbackFn)
some(callbackFn, thisArg)

// 内联回调函数
some(function(element) { /* … */ })
some(function(element, index) { /* … */ })
some(function(element, index, array){ /* … */ })
some(function(element, index, array) { /* … */ }, thisArg)
```

### 参数

- `callback`

  - : 用来测试每个元素的函数，接受三个参数：

    - `element`
      - : 数组中正在处理的元素。
    - `index` {{Optional_inline}}
      - : 数组中正在处理的元素的索引值。
    - `array`{{Optional_inline}}
      - : `some()`被调用的数组。

- `thisArg`{{Optional_inline}}
  - : 执行 `callback` 时使用的 `this` 值。

### 返回值

数组中有至少一个元素通过回调函数的测试就会返回**`true`**；所有元素都没有通过回调函数的测试返回值才会为 false。

## 描述

`some()` 为数组中的每一个元素执行一次 `callback` 函数，直到找到一个使得 callback 返回一个“真值”（即可转换为布尔值 true 的值）。如果找到了这样一个值，`some()` 将会立即返回 `true`。否则，`some()` 返回 `false`。`callback` 只会在那些”有值“的索引上被调用，不会在那些被删除或从来未被赋值的索引上调用。

`callback` 被调用时传入三个参数：元素的值，元素的索引，被遍历的数组。

如果一个`thisArg`参数提供给 some()，它将被用作调用的 `callback`的 `this` 值。否则，它的 `this` value 将是 `undefined`。`this`的值最终通过 callback 来观察，根据 [the usual rules for determining the `this` seen by a function](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)的 this 判定规则来确定。

`some()` 被调用时不会改变数组。

`some()` 遍历的元素的范围在第一次调用 `callback`. 前就已经确定了。在调用 `some()` 后被添加到数组中的值不会被 `callback` 访问到。如果数组中存在且还未被访问到的元素被 `callback` 改变了，则其传递给 `callback` 的值是 `some()` 访问到它那一刻的值。已经被删除的元素不会被访问到。

## 示例

### 测试数组元素的值

下面的例子检测在数组中是否有元素大于 10。

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

### 使用箭头函数测试数组元素的值

[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions) 可以通过更简洁的语法实现相同的用例。

```js
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true
```

### 判断数组元素中是否存在某个值

此例中为模仿 `includes()` 方法，若元素在数组中存在，则回调函数返回值为 `true` :

```js
var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true
```

### 使用箭头函数判断数组元素中是否存在某个值

```js
var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true
```

### 将任意值转换为布尔类型

```js
var TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value) {
  'use strict';

  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some(function(t) {
    return t === value;
  });
}

getBoolean(false);   // false
getBoolean('false'); // false
getBoolean(1);       // true
getBoolean('true');  // true
```

## Polyfill

在第 5 版时，`some()` 被添加进 ECMA-262 标准；这样导致某些实现环境可能不支持它。你可以把下面的代码插入到脚本的开头来解决此问题，从而允许在那些没有原生支持它的实现环境中使用它。该算法是 ECMA-262 第 5 版中指定的算法，假定 `Object` 和 `TypeError` 拥有他们的初始值，且 `fun.call` 等价于 `{{jsxref("Function.prototype.call")}}`。

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: http://es5.github.io/#x15.4.4.17
if (!Array.prototype.some) {
  Array.prototype.some = function(fun/*, thisArg*/) {
    'use strict';

    if (this == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t && fun.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.some` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.some()")}}
